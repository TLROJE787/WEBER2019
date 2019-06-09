<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  color: red;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 440px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        
        <Menu mode="horizontal" theme="dark" active-name="1">
          <!-- <h1 style="color:white;display:inline-block;">工作管理系统</h1> -->
          <div style="color:white;float:left;display:inline-block;">
          <router-link to="userD">
            个人信息:{{user}}  
          </router-link>
          </div>
          <div class="layout-nav">
            <MenuItem name="1" to="/home">
              <Icon type="ios-navigate"></Icon>首页
            </MenuItem>
            <MenuItem name="2" to="/user">
              <Icon type="ios-keypad"></Icon>用户模块
            </MenuItem>
            <MenuItem name="3" to="/moderator">
              <Icon type="ios-analytics"></Icon>监考模块
            </MenuItem>
            <MenuItem name="4" to="mission">
              <Icon type="ios-paper"></Icon>任务模块
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px',margin: '20px 0'}">
        <!-- <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb> -->
        <Card>
          <div style="min-height: 200px;">
                    <div v-if="!logSuc">
            <!-- <div>账号</div>
            <div>密码</div> -->
            
            <Form :style="{width:'420px'}" :model="formTop" label-position="top">
        <FormItem label="账号">
            <Input v-model="formTop.input1"></Input>
        </FormItem>
        <FormItem label="密码">
            <Input v-model="formTop.input2"></Input>
        </FormItem>
<Button @click="toggel" type="primary">登陆</Button>
    </Form>
        </div>
        <div v-if="logSuc">
            <router-view/>
        </div>
           
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  data(){
    return {
      logSuc:false,
                formTop: {
                    input1: '',
                    input2: '',
                    
                },
                user:'用户1'
    }
  },
  methods:{
    toggel(){
      if(this.logSuc){
        this.router.push({path:'/'})
      }
      this.logSuc = !this.logSuc;
    }
  }
};
</script>
