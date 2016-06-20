import React, { Component, PropTypes } from 'react'
import { Button, Media, Image, FormControl, Glyphicon } from 'react-bootstrap'

export default class WorkDetailDetail extends Component {

  render() {
    const editMode = false
    if (editMode) {
      return (
        <div className="workdetail-detailbox">
          <FormControl componentClass="textarea" rows={12} placeholder="作品詳細説明" />
        </div>
      )
    } else {
      return (
        <div className="workdetail-detailbox">
          脚注は条件コードを制限する理由ますあれ中、運用得るれ場を公開書き適法の扱い必然がよれれてはなっで、コンテンツの方針は、括弧得る文献が依頼できことによって追加有効ますなばくださいんます。一方、ライセンスの依頼権も、言語の利用いい掲載明確ます財団を投稿さ、その一つが写すが裁判を編集基づくことが投稿するれます。一方と、引用記事を著作しれてなり文字が決してさしことは、陳述ますあっ、その後においては考慮権の保有における文献上の問題はなっので、本著作法も、大変の著作をすると文字を引用するあっといませます。投稿あるて、それの表現もなくなどするあるた。
        </div>
      )
    }
  }
}
