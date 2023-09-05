import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { DownloadOutlined, ArrowsAltOutlined } from "@ant-design/icons";
import { Avatar, Card, theme } from "antd";
const { Meta } = Card;

const Category = ({ images }) => {
  const [listImage, setListImage] = useState([]);
	const params = useParams();


	useEffect(() => {
		const listImageTemp = images.filter(
			(image) => image.category === params.categoryName
		);

		setListImage([...listImageTemp]);
	}, [params.categoryName]);
  return (
    
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry>
        {listImage.map((image, i) => (
          <span>

          <Card key={image.id}
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

export default Category;
