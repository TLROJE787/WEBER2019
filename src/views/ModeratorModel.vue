<template>
  <div>
    <h3>添加监考信息</h3>
    <div style="margin-top: 6px;width:420px;">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <!-- 起止时间，地点，课程名称，所需人数； -->
        <FormItem label="起止时间">
          <Input v-model="formLeft.input1"></Input>
        </FormItem>
        <FormItem label="地点">
          <Input v-model="formLeft.input2"></Input>
        </FormItem>
        <FormItem label="课程名称">
          <Input v-model="formLeft.input3"></Input>
        </FormItem>
        <FormItem label="所需人数">
          <Input v-model="formLeft.input4"></Input>
        </FormItem>
                <FormItem>
            <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
            <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
    <h3>监考信息浏览</h3>
    <Table border :columns="columns7" :data="data6"></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns7: [
        {
          title: "监考信息",
          key: "moderator_info",
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
          title: "状态",
          key: "state"
        },
        {
          title: "分配结果",
          key: "assign_res"
        }
      ],
      data6: [
        {
          name: "John Brown",
          state: 18,
          assign_res: "New York No. 1 Lake Park"
          // phone_number:123125
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
      ],
      formLeft: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
      },
      formRight: {
        input1: "",
        input2: "",
        input3: ""
      },
      formTop: {
        input1: "",
        input2: "",
        input3: ""
      }
    };
  },
   methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
   }
};
</script>

