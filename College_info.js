// pages/index.js

export default function KLUniversity({ dept }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>KL University - Department Info</h1>
      <p><b>Name:</b> {dept.name}</p>
      <p><b>Head:</b> {dept.head}</p>
      <p><b>Email:</b> {dept.email}</p>

      <h3>Faculty Members:</h3>
      <ul>
        {dept.faculty.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

// Static data using getStaticProps (SSG)
export async function getStaticProps() {
  const dept = {
    name: "Computer Science & Engineering",
    head: "Dr. Srinivas Rao",
    email: "cse@kluniversity.in",
    faculty: ["Dr. Haritha", "Prof. Rajesh", "Prof. Meena"]
  };

  return {
    props: { dept },
  };
}
