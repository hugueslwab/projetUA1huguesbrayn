import TemplatePage from "@/components/templatePage/TemplatePage";
import React from "react";

const page = ({ params }) => {
  const getdata = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error("erreur lors du fechting data");
    }
    return res.json();
  };

  const post = getdata(params.postId);
  return (
    <div>
      <TemplatePage titre={post.titre} description={post.body} urlDestination="/posts/"/>
    </div>
  );
};

export default page;
