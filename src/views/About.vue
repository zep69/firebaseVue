<template>
  <main class="about">

    <Card class="aboutCard">
      <template #header>
        <Toolbar>
          <template #start>
            <h3>Немного информации обо мне</h3>
          </template>
        </Toolbar>

      </template>
      <template #content>
        <div class="aboutNastya">
          <div>
            <Image preview imageClass="imageNastya" src="https://sun9-22.userapi.com/impg/OUADqaAnQ4O7s0_0DHck36VNQ0yJAZaGuxPdFQ/hK3tjIHcrNA.jpg?size=1620x2160&quality=95&sign=6bb86b6339de9eeea28a7fa5d65a32bb&type=album"></Image>
          </div>
          <div style="margin-left: 2rem">
            <p>Мне 21 год, учусь в Тольяттинском государственном университете(ТГУ) на 4 курсе факутильтета юриспруденции.</p>
            <p>2 года работаю в школе подготвки к ОГЭ и ЕГЭ по Русскому языку и Обществознанию</p>
            <h4>Мои показатели:</h4>
            <li>В 2019 году закончила школу и сдала ЕГЭ на высокие баллы: Русский язык - 98; Обществознание - 96;</li>
            <li>В том же 2019 году поуступила в университет на бюджетную основу</li>
            <li>С 2020 года работаю репетитором в школе подготвки и готовлю ребят к успешной сдаче экзаменов ОГЭ и ЕГЭ</li>
            <li>В свобожное время от работы и учебы занимаюсь танцами и программированием</li>
          </div>

        </div>
      </template>
    </Card>![](C:/Users/nikit/AppData/Local/Temp/r8r490cb.bmp)
  </main>
</template>
<script>

</script>
<style>
.imageNastya{
  max-width: 50%;
  border-radius: 1rem;
}
.aboutNastya{
  display: flex;
  align-items: center;
  justify-content: center;
}
.aboutCard{
  margin: 9rem
}
@media screen and (max-width: 768px){
 .aboutNastya{ display: block}
  .aboutCard{margin:2rem}
}

</style>
