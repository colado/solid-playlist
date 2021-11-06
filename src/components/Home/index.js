import React from "react";
import { Text } from "@inrupt/solid-ui-react";
import Form from "../Form";

const Home = () => {
  return (
    <div>
      <div className="message logged-in">
        <span>You are logged in as: </span>
        <Text
          properties={[
            "http://www.w3.org/2006/vcard/ns#fn",
            "http://xmlns.com/foaf/0.1/name",
          ]}
        />
      </div>

      <Form />
    </div>
  );
};

export default Home;
