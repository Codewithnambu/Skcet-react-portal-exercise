const list = [
  {
    id: 1,
    name: "Product1",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.SxvtpGblnKO7qTXh3GP2EwHaFv&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Product2",
    imageUrl: "https://tse2.mm.bing.net/th?id=OIP.Bl00sWHqcxZ2pY4ZY-3xtgHaHa&pid=Api&P=0&h=180",
  },
];
function Images({ lists }) {
  return (
    <>
      <h1>The List of images</h1>
      <ul style={{ listStylePosition: "none" }}>
        {lists.map((ite) => (
          <li key={ite.id} type="none">
            <h5>{ite.id}</h5>
            <h5>{ite.name}</h5>
            <br/>
            
              <img src={ite.imageUrl}></img>
            
          </li>
        ))}
      </ul>
    </>
  );
}
function Wrap(Component) {
  return (props) => {
    return <Component lists={list} {...props} />;
  };
}
const Value1 = Wrap(Images);

export default function Hoc() {
  return <Value1 />;
}