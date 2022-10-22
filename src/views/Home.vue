<template>
  <main class="home">
    <Toolbar>
      <template #start>
        <h1> Репетитор Русского языка и Обществознаиния Анастасия</h1>
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

          <ProgressSpinner v-if="loader" />
          <div v-if="!loader">
            <Carousel style="display: flex; justify-content: center;" :value="dataComments" :numVisible="3" :numScroll="1">
              <template #header>
                <h4>Отзывы моих учеников</h4>

              </template>
              <template #item="slotsProps">
                <div style="margin-top: 1rem; border:solid 1px #1b84f5; border-radius:0.5rem;  margin: .3rem; padding: 1rem; max-height: 7rem">
                  <h5>{{slotsProps.data.name}}</h5>
                  <br>
                  <h6>{{slotsProps.data.comment}}</h6>
                  <br>
                  <Rating v-model="slotsProps.data.rate" :stars="5" :readonly="true" :cancel="false" name="readonly"/>

                </div>

              </template>
              <template #footer>
                <Button v-if="$store.state.user" @click="openModal">Оставить отзыв преподователю</Button>
              </template>
            </Carousel>
          </div>

        </template>


    </Card>
    <Dialog header="Добавление нового отзыва" v-model:visible="openDialog" modal="true">
      <div style="display: block">
        <input class="p-inputtext" type="text" placeholder="Введите ваше Имя" v-model="commentForm.name">
        <br>
        <Textarea class="p-inputtextarea" style="margin-top: 1rem;" type="text" placeholder="Оставьте отзыв" v-model="commentForm.comment"/>
        <br>
        <h5>Поставьте оценку</h5>
        <Rating v-model="rating" :cancel="false" />

      </div>

      <template #footer>
        <Button @click="addComment(commentForm.name,commentForm.comment,user, rating )">Оставить отзыв</Button>

      </template>

    </Dialog>

    <Card style="margin-top: 2rem;">
      <template #header>
        <h3>Успехи моих ученикв</h3>
      </template>
      <template #content>
          <TabView>
            <TabPanel v-for="item in tableResults" :key="item.name" :header="item.name">
                <DataTable :value="item.results">
                  <Column field="name" header="Имя"></Column>
                  <Column field="points" header="Баллы"></Column>
                  <Column field="college" header="Куда поступил"></Column>
                </DataTable>
            </TabPanel>
          </TabView>

      </template>
    </Card>


  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { collection, getDocs, getDoc, doc, setDoc,  query, where, onSnapshot, addDoc, updateDoc } from "firebase/firestore";
import {db, auth} from '../firebase'
import { useStore } from "vuex";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(){
    const store = useStore()
  },
  data:()=>({
    tableResults: [
      {name:'Русский язык 11 класс', results: []},
      {name:'Обществознание 11 класс', results: []},
      {name: 'Обществознание 9 класс',results: []}
    ],
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
    ],
    openDialog:false,
    dataComments:[],
    user:null,
    rating:null,
    loader:true,
    commentForm:{
      name:null,
      comment:null,
      userId: null,
      rate: null,
    }
  }),

  async mounted(){
    await this.getComments()
    await this.getStudents()
    this.user = auth.currentUser.uid
    console.log(this.user)


  },
  methods:{
    async getStudents(){
      const q = await query(collection(db, "students"));
      this.tableResults[0].results = []
      this.tableResults[1].results = []
      this.tableResults[2].results = []
      const unsubscribe =  onSnapshot(q, (querySnapshot) =>{
        querySnapshot.forEach((doc)=>{
          if (doc.data().discipline === 'Русский 11'){
            this.tableResults[0].results.push({name: doc.data().name, points: doc.data().points, college: doc.data().college})
          }
          if (doc.data().discipline === 'Общество 11'){
            this.tableResults[1].results.push({name: doc.data().name, points: doc.data().points, college: doc.data().college})
          }
          if (doc.data().discipline === 'Общество 9'){
            this.tableResults[2].results.push({name: doc.data().name, points: doc.data().points, college: doc.data().college})
          }
        })
      })
    },

    async getComments(){
      this.loader = true
      const q = await query(collection(db, "comments"));
      const unsubscribe =  onSnapshot(q, (querySnapshot) =>{
        this.dataComments = []
        querySnapshot.forEach((doc)=>{
          let data = {
            id: doc.id,
            name: doc.data().name,
            comment: doc.data().comment,
            rate: doc.data().rate
          }
          this.dataComments.push(data)
        })
      })
      setTimeout(()=>{
        this.loader = false
      }, 3000)

    },
    openModal(){
      this.openDialog = true
    },
    async addComment(name, comment, userId, rate){
      if (this.user === null){
       return  alert('Чтобы оставить отзыв войдите в систему заново')
      }

      if (name===null || comment===null ||  rate===null){
        alert("Что-то пошло не так, заполните все поля")
      } else {
        const docRef = await addDoc(collection(db, "comments"), {
          name: name,
          comment: comment,
          userId: userId,
          rate: rate,
        })
        this.commentForm={
          name:null,
          comment:null,
          userId: null,
          rate: null,
        }
        this.openDialog=false

      }
    }
  }
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
