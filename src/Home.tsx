import React, { useState } from 'react';

//needed to refacor using context or any other state management

 function Home() {
const [username,setUsername] = useState(localStorage.getItem('username'));

  return <div>
      <nav>
          <p>{username}</p>
      </nav>
  </div>;
}

export default Home;