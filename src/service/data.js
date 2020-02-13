import axios from "axios";
import pinyin from "pinyin";

function formatDate(date) {
    return parseInt(date.split('.')[0]) + '-' + parseInt(date.split('.')[1])
}

export default function(province) {
  return axios.get("/g2/getOnsInfo?name=disease_h5").then(res => {
    const data = JSON.parse(res.data.data);
    const {
      areaTree,
      chinaDayAddList,
      lastUpdateTime
    } = data;
    // areaTree 国家以及地区的 当天确诊、可疑、死亡、治愈，总的确诊、可疑、死亡、治愈
    // chinaAdd 中国新增确诊、可疑、治愈、死亡
    // chinaTotal 中国总共确诊、可疑、治愈、死亡
    // chinaDayAddList 中国每天新增确诊、可疑、治愈、死亡
    // chinaDayList 中国每天确诊、可疑、治愈、死亡人数
    const addXAxis = [];
    const addConfirm = [];
    const addSuspect = [];
    chinaDayAddList.forEach((day) => {
      addXAxis.push(formatDate(day.date))
      addConfirm.push(day.confirm);
      addSuspect.push(day.suspect);
  })
    areaTree[0].children.forEach(pro => {
      pro['pinyinName'] = pinyin(pro.name, {style: pinyin.STYLE_NORMAL}).join().replace(/\,/g, "")
    })
    if (province) {
      // 要显示某省的数据
      const index = areaTree[0].children.findIndex(p => {
        return p.pinyinName === province
      });
      return {areaTree: areaTree[0].children[index], addXAxis, addConfirm, addSuspect, lastUpdateTime}
    } else {
      // 要显示中国的数据
      return {areaTree: areaTree[0], addXAxis, addConfirm, addSuspect, lastUpdateTime};
    }
    
    const dayList = chinaDayList.map(day => {
        return {...day, date: formatDate(day.date)}
    });
    const mapData = areaTree[0].children.map(province => {
        return {name: province.name, value: province.total.confirm}
    })
    
    // return {areaTree, mapData, chinaAdd, chinaTotal, dayList, addXAxis, addConfirm, addSuspect, lastUpdateTime, province};
  });
}
