import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase/FireBaseConfig';
import {

	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,

} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Modal, Input, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const Layouts = (props) => {
	const listMenu = [
		{
			key: 'home',
			label: 'Home',
		},
		{
			type: 'divider',
		},
		{
			key: 'landscape',
			label: 'Lanscape',
		},
		{
			key: 'car',
			label: 'Car',
		},
		{
			key: 'fashion',
			label: 'Fashion',
		},
		{
			key: 'wallpaper',
			label: 'Wallpaper',
		},
		{
			key: 'websites',
			label: 'Websites',
		},
		{
			key: 'wildlift',
			label: 'Wildlife',
		},
		{
			key: 'food',
			label: 'Food',
		},
		{
			key: 'sports',
			label: 'Sports',
		},
		{
			key: 'art',
			label: 'Art',
		},
		{
			key: 'travel',
			label: 'Travel',
		},
		{
			key: 'quotes',
			label: 'Quotes',
		},
		{
			key: 'pets',
			label: 'Pets',
		},
		{
			key: 'scientific',
			label: 'Scientific',
		},
	];
	const [collapsed, setCollapsed] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isClickSignIn, setIsClickSignIn] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	// Chưa đăng nhập isLogin => false
	// Đăng nhập thành công isLogin => true

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const showModal = (status) => {
		if (status === 'signIn') {
			setIsClickSignIn(true);
		} else {
			setIsClickSignIn(false);
		}
		setIsModalOpen(true);
	};
	// const handleOk = () => {
	// 	console.log('email: ', email);
	// 	console.log('password: ', password);
	// 	// setIsModalOpen(false);
	// 	// signUp(email, password);
	// };
	const signUp = async () => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredential.user;

			const result = await addDoc(collection(db, 'users'), {
				uid: user.uid,
				email: user.email,
			});
			if (user) {
				setIsLogin(true);
				localStorage.setItem('uid', user.uid);
			}
			console.log(result);
			setIsModalOpen(false);
			return true;
		} catch (error) {
			return { error: error.message };
		}
	};
	const signIn = async () => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			console.log(user);
			if (user) {
				setIsLogin(true);
				localStorage.setItem('uid', user.uid);
			}
			setIsModalOpen(false);
			return true;
		} catch (error) {
			return { error: error.message };
		}
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const navigate = useNavigate();

	const handleRedirectPage = ({ key }) => {
		if (key === 'home') {
			navigate('/');
		} else {
			navigate(`/category/${key}`);
		}
	};

	useEffect(() => {
		const uid = localStorage.getItem('uid');
		if (uid) {
			setIsLogin(true);
		}
	}, []);

	return (
		<Layout>
			<Modal
				title={isClickSignIn ? 'Đăng nhập' : 'Đăng ký'}
				open={isModalOpen}
				onOk={isClickSignIn ? signIn : signUp}
				okText={isClickSignIn ? 'Đăng nhập' : 'Đăng ký'}
				onCancel={handleCancel}
			>
				<div style={{ margin: '8px' }}>
					<Input
						placeholder='Enter your email...'
						onChange={handleChangeEmail}
					/>
				</div>
				<div style={{ margin: '8px' }}>
					<Input
						placeholder='Enter your password...'
						type='password'
						onChange={handleChangePassword}
					/>
				</div>
			</Modal>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className='demo-logo-vertical' />
				<Menu
					theme='light'
					mode='inline'
					defaultSelectedKeys={['home']}
					items={listMenu}
					onSelect={handleRedirectPage}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Button
							type='text'
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: '16px',
								width: 64,
								height: 64,
							}}
						/>
						<div>
							{isLogin ? (
								<Avatar
									shape='square'
									size={50}
									src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1'
								/>
							) : (
								<>
									<Button
										type='primary'
										style={{
											margin: '0px 8px',
										}}
										onClick={() => showModal('signUp')}
									>
										Sign Up
									</Button>
									<Button
										type='default'
										style={{
											margin: '0px 8px',
										}}
										onClick={() => showModal('signIn')}
									>
										Sign In
									</Button>
								</>
							)}
						</div>
					</div>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						minHeight: 280,
					}}
				>
					{props.children}
				</Content>
			</Layout>
		</Layout>
	);
};
export default Layouts;