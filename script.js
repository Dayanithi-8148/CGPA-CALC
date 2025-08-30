function get() {
    let crd = [3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 1];
    let sub = [];
    let g1 = document.getElementById("sub1").value;
    sub.push(g1);
    let g2 = document.getElementById("sub2").value;
    sub.push(g2);
    let g3 = document.getElementById("sub3").value;
    sub.push(g3);
    let g4 = document.getElementById("sub4").value;
    sub.push(g4);
    let g5 = document.getElementById("sub5").value;
    sub.push(g5);
    let g6 = document.getElementById("sub6").value;
    sub.push(g6);
    let g7 = document.getElementById("sub7").value;
    sub.push(g7);
    let g8 = document.getElementById("sub8").value;
    sub.push(g8);
    let g9 = document.getElementById("sub9").value;
    sub.push(g9);
    let g10=document.getElementById("sub10").value;
    sub.push(g10);
    let g11=document.getElementById("sub11").value;
    sub.push(g11);

    let j = 0;
    let totalGradePoints = 0;
    for (let i of sub) {
        if (i === "o") {
            temp = 10 * crd[j];
        } else if (i === "a+") {
            temp = 9 * crd[j];
        } else if (i === "a") {
            temp = 8 * crd[j];
        } else if (i === "b+") {
            temp = 7 * crd[j];
        } else if (i === "b") {
            temp = 6 * crd[j];
        } else if (i === "c") {
            temp = 5 * crd[j];
        } else {
            temp = 0 * crd[j];
        }
        j += 1;
        totalGradePoints += temp;
    }
    let credits=0;
    let index=0;
    for(let i of sub){
        if (i != 'ra'){
            credits+=crd[index];
        }
        index+=1;
    }

    let cgpa = totalGradePoints / credits;

    fun1(cgpa);

    console.log(totalGradePoints);
    console.log(credits);
    		
}

function fun1(cgpa)
{
	document.getElementById("resultcgpa").textContent = cgpa;
}

