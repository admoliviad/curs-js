function showNames () {


    var propozitie = 'Dragos este prietenul lui Carol si a lui Steven insa nu si a lui Keith.';

    var listaPrenume = propozitie.match(/([A-Z][a-z']*)(\s[A-Z][a-z']*)*/g);
    
    // alert(listaPrenume);

    document.getElementById('listaPrenume').innerHTML = listaPrenume;
}



function showNumbers () {

    var myArray = [1,2,3,4,5,6];

    var pozitia5 = myArray[5];

    var numar3 = myArray[2];

    var lungimeArray = myArray.length;

    var sumaNumere = myArray[0] + myArray[4];

    var pozitia1 = myArray[1];

    document.getElementById('listaNumere').innerHTML = pozitia5 + ', ' + numar3 + ', ' + lungimeArray + ', ' + sumaNumere + ', ' + pozitia1;

}


function showPerson () {

    var person = {
        firstName : 'Ion',
        lastName : 'Vasile',
        email : 'test@gmail.com',
        birthYear : 1990,
        pets : [
            {
                tip : 'caine',
                rasa : 'doberman',
                age: 4,
            },
            {
                tip : 'pisica',
                rasa : 'europeana',
                age : 6,
            },
            {
                tip : 'peste',
                rasa : 'guppy',
                age : 7,
            },
        ],
        zipCode: 8444,
    };

document.getElementById('persoana').innerHTML = person.firstName + ' are un ' + person.pets[1].tip + ' de rasa ' + person.pets[1].rasa  + ' si un ' + person.pets[2].tip;
;
}

