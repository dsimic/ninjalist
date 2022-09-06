export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + context.params.id
  );
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const SpecificNinja = ({ ninja }) => {
  return (
    <>
      <h1>Details page</h1>
      <h3>Hello, my name is {ninja.name}</h3>
      <p>My email is {ninja.email}</p>
    </>
  );
};

export default SpecificNinja;
