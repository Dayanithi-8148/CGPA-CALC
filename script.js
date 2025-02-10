function get() {
    let crd = [4, 3, 3, 3, 3, 3, 2, 2, 2];
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

    let j = 0;
    let sum = 0;
    let sum1 = 0;
    for (let i of sub) {
        if (i === "o") {
            a = 10 * crd[j];
        } else if (i === "a+") {
            a = 9 * crd[j];
        } else if (i === "a") {
            a = 8 * crd[j];
        } else if (i === "b+") {
            a = 7 * crd[j];
        } else if (i === "b") {
            a = 6 * crd[j];
        } else if (i === "c") {
            a = 5 * crd[j];
        } else {
            a = 0 * crd[j];
        }
        if(i!=0){
            sum1+=crd[j]
        }
        j += 1;
        sum += a;
    }

    let cgpa = sum / sum1;

    fun1(cgpa);

    		
}



	function fun1(cgpa)
{
	
	
	document.getElementById("resultcgpa").textContent = cgpa;
	console.log(cgpa);
}

