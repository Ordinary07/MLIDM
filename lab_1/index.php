<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>

        <h1>Пример выполнения лабораторной работы</h1>
        <form action="" method="POST" onSubmit="javascript: return getData(this)">
            Первый массив
            <input type="text" name="mas1" id="id_mas1" value="">  <br>
            Второй массив
            <input type="text" name="mas2" id="id_mas2">
            <br>
            <input type="submit" value="Рассчитать значения">
           <input type="button" onClick="main(0)" value="Объединение">
<input type="button" onClick="main(1)" value="Пересечение">
<input type="button" onClick="main(2)" value="Дополнение A/B">
<input type="button" onClick="main(3)" value="Дополнение B/A">
<input type="button" onClick="main(4)" value="Симметрическая разность">
        </form>
        <br><br>
        <div id="result">


        </div>



        <script src="/scripts/functions.js" type="text/javascript"></script>
    </body>
<html>

