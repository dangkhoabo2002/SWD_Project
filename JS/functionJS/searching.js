const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[3];

    if (td) {
      let textvalue = td.textContent || td.innerHTML;

      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[1].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

var input = document.getElementById("myInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
