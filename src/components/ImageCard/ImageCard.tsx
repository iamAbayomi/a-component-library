import { Image } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";
import { CSSProperties } from "styled-components";
import { IButtonProps } from "../../utils/types";
import Button from "../Button/Button";
import Card from "../Card/Card";

export interface IImageCard extends IButtonProps {
  cardAttributes?: HTMLAttributes<HTMLDivElement>;
  cardStyle?: CSSProperties;
  imageSrc: string;
  imageAttributes?: HTMLAttributes<HTMLImageElement>;
  imageStyle?: CSSProperties;
}

const ImageCard = ({
  imageSrc,
  cardAttributes,
  cardStyle,
  imageAttributes,
  imageStyle,
  buttonAttributes,
  buttonStyle
}: IImageCard) => {
  return (
    <Card cardStyle={cardStyle} cardAttributes={cardAttributes}>
      <Image src={imageSrc} style={imageStyle} {...imageAttributes} />
      <Button
        width={"200px"}
        height={"32px"}
        buttonText={"View"}
        buttonStyle={buttonStyle}
        {...buttonAttributes}
      />
    </Card>
  );
};

export default ImageCard;
