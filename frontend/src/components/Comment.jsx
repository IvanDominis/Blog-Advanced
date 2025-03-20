import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 mb-8 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="object-cover w-10 h-10 rounded-full"
          w="40"
        ></Image>
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam
          qui, nulla fuga in, explicabo officia, veniam tenetur dolores aut
          voluptatem atque odio et distinctio rem. Asperiores nemo impedit
          eveniet!
        </p>
      </div>
    </div>
  );
};

export default Comment;
