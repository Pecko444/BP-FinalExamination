// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
//async function fetch and return converted response from json
async function fetchData(url) {
    try {
      const response = await fetch(url);
      return await response.json();

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

// manipulate function that help convert json into newUser 
function convert(data) {
    const newUser = data.map(user => user.name);
    console.log(newUser);
}

//main async function
async function main() {
    try {
        const data = await fetchData("https://jsonplaceholder.typicode.com/users");
        convert(data);
    } catch (error) {
        console.log(`error in main: `, error)
    }
}

// execute //
main();