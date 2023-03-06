function getData(forms)
{
   const fData = new FormData(forms)
   console.log(fData);
   console.log(fData.get('mas1'));
   console.log(fData.get('mas2'));

   return false
}


/**
 * Валдация параметров ввода
 */
function validateElement(element)
{
    return ( (element[0]>='a' &&  element[0]<='z') &&
             (element[1]>=0 && element[2]<=9 ) &&
             (element[2]>=0 && element[2]<=9 ) &&
             (element[3] % 2)==0 );
}


/**
 * Объединение массивов
 * @param elementsArray1
 * @param elementsArray2
 * @returns {string}
 */
 function onlyUnique(value, index, self) {
  return self.indexOf(value) == index;
}
 
function  unionArray(elementsArray1, elementsArray2)
{
    let resultArray = [];
    for(let i=0; i<elementsArray1.length; i++)
        resultArray[resultArray.length] = elementsArray1[i];
    for(let i=0; i<elementsArray2.length; i++)
        resultArray[resultArray.length] = elementsArray2[i];
    return "Объединение массивов: " + resultArray.join(" - ")
}
function  crossArray(elementsArray1, elementsArray2)
{
    let resultArray = [];
    for(let i=0; i<elementsArray1.length; i++)
		if(elementsArray2.includes(elementsArray1[i]))
        resultArray.push(elementsArray1[i]);
    return "Пересечение массивов: " + resultArray.join(" - ")
}
function  add1Array(elementsArray1, elementsArray2)
{
    let resultArray = [];
    for(let i=0; i<elementsArray1.length; i++)
        resultArray[resultArray.length] = elementsArray1[i];
    for(let i=0; i<elementsArray2.length; i++)
		if(!resultArray.includes(elementsArray2[i]))
		resultArray.push(elementsArray2[i]);
    return "Дополнение массивов A/B: " + resultArray.join(" - ")
}
function  add2Array(elementsArray1, elementsArray2)
{
    let resultArray = [];
    for(let i=0; i<elementsArray2.length; i++)
        resultArray[resultArray.length] = elementsArray2[i];
    for(let i=0; i<elementsArray1.length; i++)
		if(!resultArray.includes(elementsArray1[i]))
		resultArray.push(elementsArray1[i]);
    return "Дополнение массивов B/A: " + resultArray.join(" - ")
}
function  diffArray(elementsArray1, elementsArray2)
{
    let resultArray = [];
    for(let i=0; i<elementsArray1.length; i++)
		if(!elementsArray2.includes(elementsArray1[i]))
        resultArray.push(elementsArray1[i]);
	for(let i=0; i<elementsArray2.length; i++)
		if(!elementsArray1.includes(elementsArray2[i]))
        resultArray.push(elementsArray2[i]);
    return "Симметрическая разность массивов: " + resultArray.join(" - ")
}


/**
 * Основная функция
 */
function main(operation)
{
    let mas1 = document.getElementById("id_mas1").value
    let mas2 = document.getElementById("id_mas2").value
    let strError = "";
    mas1 = mas1.split(" ")
    mas2 = mas2.split(" ")
    console.log(mas1)
    for(let i=0; i<mas1.length; i++)
    {
        if(!validateElement(mas1[i])) {
            console.log("Ошибка в " + (i + 1) + " элементе")
            strError += "Ошибка в " + (i + 1) + " элементе первого массива \n"
        }
    }

    for(let i=0; i<mas2.length; i++)
    {
        if(!validateElement(mas2[i]))
            strError += "Ошибка в " + (i+1) + " элементе второго массива"
    }

    if(strError == "")
    {
		mas2 = mas2.filter(onlyUnique)
		mas1 = mas1.filter(onlyUnique)
        document.getElementById('result').innerHTML = "Результат рассчета:<br>"
		switch(operation)
		{
			case 0:
				document.getElementById('result').innerHTML += unionArray(mas1, mas2)
				break
			case 1:
				document.getElementById('result').innerHTML += crossArray(mas1, mas2)
				break
			case 2:
				document.getElementById('result').innerHTML += add1Array(mas1, mas2)
				break
			case 3:
				document.getElementById('result').innerHTML += add2Array(mas1, mas2)
				break
			case 4:
				document.getElementById('result').innerHTML += diffArray(mas1, mas2)
				break
		}
    }
    else {
        document.getElementById('result').innerHTML = strError
    }

}






