export default function Seperator(){

    const separatorStyle = {
        borderBottom: '5px solid #ccc',
        margin: '10px 0', // Optional: Adjust margin as needed
        backgroundColor: "transparent"
    };

    return (
    <div>
      {/* Your content above the separator */}
      <div style={separatorStyle}></div>
      {/* Your content below the separator */}
    </div>
  );

}