const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const students = xmlDoc.getElementsByTagName("student");
const result = { list: [] };

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const nameNode = student.getElementsByTagName("name")[0];
  const lang = nameNode.getAttribute("lang");
  const firstName = nameNode.getElementsByTagName("first")[0].textContent;
  const lastName = nameNode.getElementsByTagName("second")[0].textContent;
  const age = parseInt(student.getElementsByTagName("age")[0].textContent);
  const prof = student.getElementsByTagName("prof")[0].textContent;

  const name = `${firstName} ${lastName}`;

  result.list.push({ name, age, prof, lang });
}

console.log(result);