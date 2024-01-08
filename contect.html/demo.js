var lst = []
function getdata() {
    var fastname = document.getElementById("t1").value
    var lastname = document.getElementById("t2").value
    var Phoneno = document.getElementById("t3").value
    if (fastname == "" && lastname == "" && Phoneno == "") {
        alert("enter the value")
    }
    else {
        var obj = { fastname: fastname, lastname: lastname, Phoneno: Phoneno }
        lst.push(obj)
        console.log(lst);
        display()
        // document.getElementById("ans").value = ""
    }
}
function display() {
    var tbl = ""
    for (let i = 0; i < lst.length; i++) {
        tbl += "<tr><td>" + lst[i].fastname+ "</td><td>" + lst[i].lastname+ "</td><td>" + lst[i].Phoneno+ "</td><td>" + "<button class='btn btn-danger' onclick=remove(" + i + ")>Delete</button>" + "<button class='btn btn-warning' onclick='update(" + i + ")'>Update</button>" + "</td ></tr>"
        // tbl += tbl + "<tr>";
        // tbl += tbl +"<td>" + lst[i].fastname + "</td>" + "<td>" + lst[i].lastname + "</td>" + "<td>" + lst[i].Phoneno + "</td>";
        // tbl += tbl + "<td><button type='button' onclick='update("+i+") class='btn btn - warning'>Update</button>";
        // tbl += tbl + "<button type='button' onclick='remove("+i+") class='btn btn-danger'>Delete</button></td>";
        // // tbl += tbl + "<a href="#" class="btn btn-danger" onclick="remove("+i+")><i class="bi bi - trash - fill"></i></a></td></tr>";

    }
    tbl = tbl + "</table>"
    document.getElementById("ans").innerHTML = tbl
}
function remove(p) {
    lst.splice(p, 1)
    display()
    console.log(p);
}

function update(i) {

    z2 = prompt("enter the new value")
    z3 = prompt("enter the new value")
    z4 = prompt("enter the new value")
    lst[i].fastname = z2
    lst[i].lastname = z3
    lst[i].phoneno = z4

    display()

}