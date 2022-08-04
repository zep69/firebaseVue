<template>
  <main class="home">
    <Toolbar>
      <template #start>
        <h1> Репетитор Русского языка и Обществознаиния</h1>
      </template>
    </Toolbar>

    <Card style="margin-top:1rem; padding: 1rem;">
      <template #header>
        <h2>Подготовка к ЕГЭ и ОГЭ на высокий балл</h2>
      </template>
      <br>
      <template #content>
        <div style="display: block; justify-content: start;" v-for="item in arrayOfStudy">
          <li>{{item.text}}</li>
        </div>
      </template>
    </Card>
    <Card style="margin-top:1rem">
      <template #content>
      <Carousel style="display: flex; justify-content: center;" :value="arrayComments" :numVisible="3" :numScroll="1">
        <template #header>
          <h4>Отзывы моих учеников</h4>

        </template>
        <template #item="slotsProps">
          <div style="margin-top: 1rem; border:solid 1px #1b84f5; border-radius:0.5rem;  margin: .3rem; padding: 1rem; max-height: 7rem">
            <h5>{{slotsProps.data.name}}</h5>
            <br>
            <h6>{{slotsProps.data.text}}</h6>

          </div>

        </template>
        <template #footer>
          <Button>Оставить отзыв жопе</Button>
        </template>
      </Carousel>
      </template>
    </Card>


  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data:()=>({
    arrayOfStudy:[
      {id:1, text:'За один урок полностью разбираем теорию одного задания + закрепление на практике'},
      {id: 2, text:'После каждого занятия отправляю презентацию со всей информацией'},
      {id:3, text:'Делюсь своими собственными распечатками, подсказками и шпаргалками'},
      {id:4, text:'Разбираем план написания сочинения, изучаем все критерии и предоставляю сочинения прошлых лет, написанные моими учениками на максимальный балл'}
    ],
    arrayComments:[
      {id:1, name:'Алег Казел', text:'Афигеть настя жопа'},
      {id:2, name:'Юра Бомбящий', text:'Она попа конечно'},
      {id:3, name:'Ученик какой-то', text:'Пиписька мелкая'},
      {id:4, name:'Директор', text:'Жопит на уроках'},
      {id:5, name:'Никита Крутой', text:'Любимая пипика'},
    ]
  })
}
</script>
<style>
.comment{
  border: solid 1px;
  border-color:steelblue;
  border-radius: 0.5rem;
  max-width:14rem;
  padding: 1rem;
  margin-top: 1rem;


}
</style>
