import React, { useState } from "react";
import { Image, Typography } from "antd";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const { Title } = Typography;
const ImageDetail = ({ images }) => {
  const [listImage, setListImage] = useState([]);
  const params = useParams();
  useEffect(() => {
    const listImageTemp = images.filter(
      (image) => image.id === Number(params.idImage)
    );
    setListImage([...listImageTemp]);
    console.log(listImage);
  }, [params.idImage]);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "0 15px" }}>
        {listImage.map((image) => (
          <Image
            key={image.id}
            width={880}
            height={"auto"}
            style={{ borderRadius: "18px" }}
            src={image.link}
          />
        ))}
      </div>
      <div>
      <Title>{listImage[0]?.nameImage}</Title>
      <Title level={3}>{listImage[0]?.author?.name}</Title>
      </div>
    </div>
  );
};

export default ImageDetail;
