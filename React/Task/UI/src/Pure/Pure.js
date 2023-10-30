
let guest = 0;
export default function Pure() {
 
  // Bad: changing a preexisting variable!
 
  guest = guest + 1;  
  console.log("gu",guest) 
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Tea cup for guest #{guest}</h2>
    </div>
  );
}
