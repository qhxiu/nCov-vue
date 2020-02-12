import getData from "../service/data.js";

export default {
  state: {
    areaTree: [],
    chinaAdd: {},
    chinaTotal: {},
    dayAdd: [],
    dayList: [],
    mapData: [],
    addXAxis: [1,2,3],
    addConfirm: [],
    addSuspect: []
  },
  mutations: {
    setMapData(state, status) {
      const {
        areaTree,
        mapData,
        chinaAdd,
        chinaTotal,
        dayAdd,
        dayList,
        addXAxis,
        addConfirm,
        addSuspect
      } = status;
      state.areaTree = areaTree;
      state.mapData = mapData;
      state.chinaAdd = chinaAdd;
      state.chinaTotal = chinaTotal;
      state.dayList = dayList;
      state.addXAxis = addXAxis;
      console.log(state);
      state.addConfirm = addConfirm;
      state.addSuspect = addSuspect;
      
    }
  },
  actions: {
    getMapData({ commit }) {
      getData().then(res => {
        commit("setMapData", res);
        console.log(res);
      });
    }
  }
};
