import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { DownloadOutlined, ArrowsAltOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { Avatar, Card } from "antd";
const { Meta } = Card;
const Homepage = ({ images }) => {
  const navigate = useNavigate();
  const handleDetail = (id ) => {
		if (id === '') {
			navigate('/');
		} else {
			navigate(`/image-detail/${id}`);

		}
	};
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry>
        {images.map((image, i) => (
          <span
           onClick={()=>handleDetail(image.id)}
           key={image.id}>
          <Card 
					items={image}
            
            style={{
              margin: "10px 10px",
            }}
            cover={
              <img
                key={image.id}
                src={image.link}
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "15px",
                  padding: "5px 5px",
                }}
                alt=""
              />
            }
            actions={[
              <DownloadOutlined key="download" />,
              <ArrowsAltOutlined key="open-link" />,
            ]}
          >
            <Meta
              avatar={<Avatar>{image.author.name}</Avatar>}
              title={image.author.name}
              description={image.category}
            />
          </Card>
          </span>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Homepage;
