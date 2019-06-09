<template>
    <div>
        <H3>
            修改个人信息
        </H3>
        <div style="width:420px;">
        <Form :model="formLeft" label-position="left" :label-width="100">
        <!-- 起止时间，地点，课程名称，所需人数； -->
        <!-- 姓名，职称，简介，手机号 -->

        <FormItem label="姓名">
          <Input v-model="formLeft.input1"></Input>
        </FormItem>
        <FormItem label="职称">
          <Input v-model="formLeft.input2"></Input>
        </FormItem>
        <FormItem label="简介">
          <Input v-model="formLeft.input3"></Input>
        </FormItem>
        <FormItem label="手机号">
          <Input v-model="formLeft.input4"></Input>
        </FormItem>
                <FormItem>
            <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
            <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
        </div>
        <h3>
            查看监考信息
        </h3>
        <Table border :columns="columns8" :data="data7"></Table>
        <h3>
            查看任务信息
        </h3>
        <Table border :columns="columns7" :data="data6"></Table>
    </div>
</template>
<script>
export default {
    data(){
        return {
                    // <!-- 有当前/历史任务信息，所有其他用户回复信息，任务结果 -->
                columns7: [
                    {
                        title: '当前任务信息',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '历史任务信息',
                        key: 'age'
                    },
                    {
                        title: '其他用户回复信息',
                        key: 'address'
                    },{
                        title: '任务结果',
                        key: 'phone_number'
                    },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "回复"
              )
            ]);
          }
        } 
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        phone_number:123125
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
      formLeft: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
      },
      columns8: [
        {
          title: "姓名",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "职称",
          key: "age"
        },
        {
          title: "简介",
          key: "address"
        },
        {
          title: "手机号",
          key: "phone_number"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "修改"
              )
            ]);
          }
        }
      ],
      data7: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          phone_number: 123125
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
}
</script>
