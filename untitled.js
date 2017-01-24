var arr = [0, -3, 0, 0, 0, 6, 5, 3, 7, 0, 0,];

function moveZero (arr){
    var a = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            a++;
        } else {
            if (a > 0) {
                arr[i - a] = arr[i];
                arr[i] = 0;
            }
        }
    }
}

alert (moveZero (arr));

alert('Goops');
