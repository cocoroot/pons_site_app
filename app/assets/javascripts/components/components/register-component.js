import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Form, FormGroup, Col, ControlLabel,Checkbox,Button, FormControl } from 'react-bootstrap'


export const fields = [ 'email', 'nickname', 'password' ,'confirmpassword', 'agree' ]


const validate = values => {
  const errors = {}
  if (!values.nickname) {
    errors.nickname = '必須エラー'
  }
  if (!values.password) {
    errors.password = '必須エラー'
  }
  return errors
}

const asyncValidate = (values/*, dispatch */) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ([ 'cocoro', '伊藤', '佐藤', '笠原' ].includes(values.nickname)) {
        reject({ nickname: 'ご利用できません' })
      } else {
        resolve()
      }
    }, 1000) // simulate server latency
  })
}


const signup = values => {
    console.log(values.nickname)
    console.log(values.password)
    console.log(values.email)
    const {regist} = this.prpps
    regist(values.nickname,values.password,values.email)
    console.log("api called")
}

export default class Register extends Component {

  signup(values) {
    const { regist } = this.props
    regist(values.nickname,values.password,values.email)
  }

  render() {
    const { regist,asyncValidating, fields: { email,nickname, password, confirmpassword, agree }, resetForm, handleSubmit, submitting } = this.props

    console.log("prpps = %o",this.props )



    return (<div><Form horizontal onSubmit={this.props.handleSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email"  {...email}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalNickname">
          <Col componentClass={ControlLabel} sm={2}>
            ニックネーム
          </Col>
          <Col sm={10}>
            <div>
            <FormControl type="text" placeholder="ニックネーム"  {...nickname}/>
              {asyncValidating === 'nickname' && <i /* spinning cog *//>}
            </div>
              {nickname.touched && nickname.error && <div>{nickname.error}</div>}
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            パスワード
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="パスワード"  {...password}/>
              {password.touched && password.error && <div>{password.error}</div>}
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalConfirmPassword">
          <Col componentClass={ControlLabel} sm={2}>
            パスワード（確認）
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="パスワード（確認）"  {...confirmpassword}/>
              {confirmpassword.touched && confirmpassword.error && <div>{confirmpassword.error}</div>}
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox {...agree}>規約に同意</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup inline controlId="formHorizontalSubmit">
        <Col smOffset={2} sm={10}>
        <Button bsStyle="primary" bsSize="large" type="submit" disabled={submitting}>
          {submitting ? <i/> : <i/>} 登録
        </Button>
        <Button bsStyle="primary" bsSize="large" type="button" disabled={submitting} onClick={resetForm}>
          クリア
        </Button>
        </Col>
        </FormGroup>


      </Form></div>

    )
  }
}

export default reduxForm({
  form: 'Register',
  fields,
  asyncValidate,
  asyncBlurFields: [ 'nickname' ],
  validate
},
undefined, // or mapping some state to props
{
  onSubmit: signup  // action creator to run submit form mapped to onSubmit
})(Register)


  Register.propTypes = {
    //asyncValidating: PropTypes.string.isRequired,
    fields: PropTypes.object.isRequired,
    resetForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }
