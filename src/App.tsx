import React from "react";
import Avatar from "./components/Avatar";
import AvatarandName from "./components/AvatarAndName";
import Badge from "./components/Badge/Badge";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Checkbox from "./components/Checkbox/Checkbox";
import DropDown from "./components/Dropdown/DropDown";
import Modal from "./components/Modal/Modal";
import OverviewCard from "./components/OverviewCard/OverviewCard";
import Typography from "./components/Typography/Typography";

function App() {
  return (
    <div>
      <Avatar imageSrc={"https://avatars2.githubusercontent.com/u/132554"} />
      <AvatarandName
        name={"James Brown"}
        imageSrc={"https://avatars2.githubusercontent.com/u/132554"}
      />
      <Badge text="Successfu;" />
      <Button
        width={"132px"}
        height={"42px"}
        color={"blue"}
        margin={"20px 0px"}
        backgroundColor={"white"}
        buttonText={"Secondary"}
      />
      <Card />
      <Checkbox id={""} name={""} />
      <DropDown menuTitle={"work"} menuItem={["place", "house"]} />
     
      <Modal children={<p>Hello</p>} />
      <OverviewCard percentageText={"Testing"} percentage={0} />
      {/* <Table tableColums={["Name","Role"]} tableData={[["John", "Admin"]]} /> */}
      <Typography
        fontSize={"42px"}
        text={"x-Large"}
        fontWeight={"500"}
        lineHeight={"44px"}
      />
    </div>
  );
}

export default App;
