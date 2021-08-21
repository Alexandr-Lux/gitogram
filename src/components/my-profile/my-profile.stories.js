import { myProfile } from './'

export default {
  title: 'Профиль (myProfile)',
  components: {
    myProfile
  }
} 

const defaultView = () => {
  return {
    components: {
      myProfile
    },
    template: `
      <div style="width: 380px; height: 100px; background-color: #fff; ">
        <my-profile
          avatar='https://picsum.photos/300'
          login='login_name'
          username='User Name'
          repos='10'
          starred='15'
        />
      </div>
      `
  }
}

export { defaultView }

defaultView.story = {
  name: 'Стандартный вид'
}
