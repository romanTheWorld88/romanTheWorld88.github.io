export default function Seperator({margin}){

    const separatorStyle = {
        borderBottom: '5px solid #ccc',
        marginBottom: margin || '2px 0', // Optional: Adjust margin as needed
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