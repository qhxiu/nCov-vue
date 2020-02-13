import getData from "../service/data.js";
import pinyin from "pinyin";

function isPosition(num) {
  return num >= 0 ? "+" + num : num;
}

export default {
  state: {
    areaTree: [],
    chinaAdd: {},
    chinaTotal: {},
    dayAdd: [],
    dayList: [],
    addXAxis: [],
    addConfirm: [],
    addSuspect: [],
    lastUpdateTime: null,
    province: [],
    // 新数据
    statistics: {},
    mapData: []
  },
  mutations: {
    setMapData(state, status) {
      const {
        areaTree,
        addXAxis,
        addConfirm,
        addSuspect,
        lastUpdateTime
      } = status;
      state.areaTree = areaTree;
      const { total, today } = areaTree;
      state.lastUpdateTime = lastUpdateTime;
      state.addXAxis = addXAxis;
      state.addConfirm = addConfirm;
      state.addSuspect = addSuspect;
      state.statistics = {
        confirm: total.confirm,
        addConfirm: isPosition(today.confirm),
        suspect: total.suspect,
        addSuspect: isPosition(today.suspect),
        heal: total.heal,
        addHeal: isPosition(today.heal),
        dead: total.dead,
        addDead: isPosition(today.dead)
      };
      state.mapData = areaTree.children.map(child => {
        return { name: child.name, value: child.total.confirm };
      });
    }
  },
  actions: {
    getMapData({ commit }, province) {
      getData(province).then(res => {
        commit("setMapData", res);
      });
    }
  }
};
