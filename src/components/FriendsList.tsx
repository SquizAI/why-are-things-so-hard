// src/components/FriendsList.tsx
import React, { useState } from "react";

const FriendsList: React.FC = () => {
  const [friends, setFriends] = useState<string[]>(["Friend 1", "Friend 2"]);
  const [inquiries, setInquiries] = useState<
    { friend: string; course: string }[]
  >([]);

  const handleInquiry = (friend: string, course: string) => {
    setInquiries([...inquiries, { friend, course }]);
  };

  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            {friend}
            <button onClick={() => handleInquiry(friend, "Course 1")}>
              Ask about Course 1
            </button>
          </li>
        ))}
      </ul>
      <h2>Inquiries</h2>
      <ul>
        {inquiries.map((inquiry, index) => (
          <li key={index}>
            {inquiry.friend} about {inquiry.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
