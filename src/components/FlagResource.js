let instance = null;

class FlagResource {
  static getInstance() {
    if (!instance) {
      instance = new FlagResource();
    }
    return instance;
  }

  constructor() {
    this.flags = {
      ad: require('../assets/images/flags/AD.png'),
      ae: require('../assets/images/flags/AE.png'),
      af: require('../assets/images/flags/AF.png'),
      ag: require('../assets/images/flags/AG.png'),
      ai: require('../assets/images/flags/AI.png'),
      al: require('../assets/images/flags/AL.png'),
      am: require('../assets/images/flags/AM.png'),
      ao: require('../assets/images/flags/AO.png'),
      ar: require('../assets/images/flags/AR.png'),
      as: require('../assets/images/flags/AS.png'),
      at: require('../assets/images/flags/AT.png'),
      au: require('../assets/images/flags/AU.png'),
      aw: require('../assets/images/flags/AW.png'),
      ax: require('../assets/images/flags/AX.png'),
      az: require('../assets/images/flags/AZ.png'),
      ba: require('../assets/images/flags/BA.png'),
      bb: require('../assets/images/flags/BB.png'),
      bd: require('../assets/images/flags/BD.png'),
      be: require('../assets/images/flags/BE.png'),
      bf: require('../assets/images/flags/BF.png'),
      bg: require('../assets/images/flags/BG.png'),
      bh: require('../assets/images/flags/BH.png'),
      bi: require('../assets/images/flags/BI.png'),
      bj: require('../assets/images/flags/BJ.png'),
      bl: require('../assets/images/flags/BL.png'),
      bm: require('../assets/images/flags/BM.png'),
      bn: require('../assets/images/flags/BN.png'),
      bo: require('../assets/images/flags/BO.png'),
      bq: require('../assets/images/flags/BQ.png'),
      br: require('../assets/images/flags/BR.png'),
      bs: require('../assets/images/flags/BS.png'),
      bt: require('../assets/images/flags/BT.png'),
      bw: require('../assets/images/flags/BW.png'),
      by: require('../assets/images/flags/BY.png'),
      bz: require('../assets/images/flags/BZ.png'),
      ca: require('../assets/images/flags/CA.png'),
      cc: require('../assets/images/flags/CC.png'),
      cd: require('../assets/images/flags/CD.png'),
      cf: require('../assets/images/flags/CF.png'),
      cg: require('../assets/images/flags/CG.png'),
      ch: require('../assets/images/flags/CH.png'),
      ci: require('../assets/images/flags/CI.png'),
      ck: require('../assets/images/flags/CK.png'),
      cl: require('../assets/images/flags/CL.png'),
      cm: require('../assets/images/flags/CM.png'),
      cn: require('../assets/images/flags/CN.png'),
      co: require('../assets/images/flags/CO.png'),
      cr: require('../assets/images/flags/CR.png'),
      cu: require('../assets/images/flags/CU.png'),
      cv: require('../assets/images/flags/CV.png'),
      cw: require('../assets/images/flags/CW.png'),
      cx: require('../assets/images/flags/CX.png'),
      cy: require('../assets/images/flags/CY.png'),
      cz: require('../assets/images/flags/CZ.png'),
      de: require('../assets/images/flags/DE.png'),
      dj: require('../assets/images/flags/DJ.png'),
      dk: require('../assets/images/flags/DK.png'),
      dm: require('../assets/images/flags/DM.png'),
      do: require('../assets/images/flags/DO.png'),
      dz: require('../assets/images/flags/DZ.png'),
      ec: require('../assets/images/flags/EC.png'),
      ee: require('../assets/images/flags/EE.png'),
      eg: require('../assets/images/flags/EG.png'),
      eh: require('../assets/images/flags/EH.png'),
      er: require('../assets/images/flags/ER.png'),
      es: require('../assets/images/flags/ES.png'),
      et: require('../assets/images/flags/ET.png'),
      eu: require('../assets/images/flags/EU.png'),
      fi: require('../assets/images/flags/FI.png'),
      fj: require('../assets/images/flags/FJ.png'),
      fk: require('../assets/images/flags/FK.png'),
      fm: require('../assets/images/flags/FM.png'),
      fo: require('../assets/images/flags/FO.png'),
      fr: require('../assets/images/flags/FR.png'),
      ga: require('../assets/images/flags/GA.png'),
      gb: require('../assets/images/flags/GB.png'),
      gd: require('../assets/images/flags/GD.png'),
      ge: require('../assets/images/flags/GE.png'),
      gf: require('../assets/images/flags/GF.png'),
      gg: require('../assets/images/flags/GG.png'),
      gh: require('../assets/images/flags/GH.png'),
      gi: require('../assets/images/flags/GI.png'),
      gl: require('../assets/images/flags/GL.png'),
      gm: require('../assets/images/flags/GM.png'),
      gn: require('../assets/images/flags/GN.png'),
      gp: require('../assets/images/flags/GP.png'),
      gq: require('../assets/images/flags/GQ.png'),
      gr: require('../assets/images/flags/GR.png'),
      gt: require('../assets/images/flags/GT.png'),
      gu: require('../assets/images/flags/GU.png'),
      gw: require('../assets/images/flags/GW.png'),
      gy: require('../assets/images/flags/GY.png'),
      hk: require('../assets/images/flags/HK.png'),
      hn: require('../assets/images/flags/HN.png'),
      hr: require('../assets/images/flags/HR.png'),
      ht: require('../assets/images/flags/HT.png'),
      hu: require('../assets/images/flags/HU.png'),
      id: require('../assets/images/flags/ID.png'),
      ie: require('../assets/images/flags/IE.png'),
      il: require('../assets/images/flags/IL.png'),
      im: require('../assets/images/flags/IM.png'),
      in: require('../assets/images/flags/IN.png'),
      io: require('../assets/images/flags/IO.png'),
      iq: require('../assets/images/flags/IQ.png'),
      ir: require('../assets/images/flags/IR.png'),
      is: require('../assets/images/flags/IS.png'),
      it: require('../assets/images/flags/IT.png'),
      je: require('../assets/images/flags/JE.png'),
      jm: require('../assets/images/flags/JM.png'),
      jo: require('../assets/images/flags/JO.png'),
      jp: require('../assets/images/flags/JP.png'),
      ke: require('../assets/images/flags/KE.png'),
      kg: require('../assets/images/flags/KG.png'),
      kh: require('../assets/images/flags/KH.png'),
      ki: require('../assets/images/flags/KI.png'),
      km: require('../assets/images/flags/KM.png'),
      kn: require('../assets/images/flags/KN.png'),
      kp: require('../assets/images/flags/KP.png'),
      kr: require('../assets/images/flags/KR.png'),
      ks: require('../assets/images/flags/KS.png'),
      kw: require('../assets/images/flags/KW.png'),
      ky: require('../assets/images/flags/KY.png'),
      kz: require('../assets/images/flags/KZ.png'),
      la: require('../assets/images/flags/LA.png'),
      lb: require('../assets/images/flags/LB.png'),
      lc: require('../assets/images/flags/LC.png'),
      li: require('../assets/images/flags/LI.png'),
      lk: require('../assets/images/flags/LK.png'),
      lr: require('../assets/images/flags/LR.png'),
      ls: require('../assets/images/flags/LS.png'),
      lt: require('../assets/images/flags/LT.png'),
      lu: require('../assets/images/flags/LU.png'),
      lv: require('../assets/images/flags/LV.png'),
      ly: require('../assets/images/flags/LY.png'),
      ma: require('../assets/images/flags/MA.png'),
      mc: require('../assets/images/flags/MC.png'),
      md: require('../assets/images/flags/MD.png'),
      me: require('../assets/images/flags/ME.png'),
      mf: require('../assets/images/flags/MF.png'),
      mg: require('../assets/images/flags/MG.png'),
      mh: require('../assets/images/flags/MH.png'),
      mk: require('../assets/images/flags/MK.png'),
      ml: require('../assets/images/flags/ML.png'),
      mm: require('../assets/images/flags/MM.png'),
      mn: require('../assets/images/flags/MN.png'),
      mo: require('../assets/images/flags/MO.png'),
      mp: require('../assets/images/flags/MP.png'),
      mq: require('../assets/images/flags/MQ.png'),
      mr: require('../assets/images/flags/MR.png'),
      ms: require('../assets/images/flags/MS.png'),
      mt: require('../assets/images/flags/MT.png'),
      mu: require('../assets/images/flags/MU.png'),
      mv: require('../assets/images/flags/MV.png'),
      mw: require('../assets/images/flags/MW.png'),
      mx: require('../assets/images/flags/MX.png'),
      my: require('../assets/images/flags/MY.png'),
      mz: require('../assets/images/flags/MZ.png'),
      na: require('../assets/images/flags/NA.png'),
      nc: require('../assets/images/flags/NC.png'),
      ne: require('../assets/images/flags/NE.png'),
      nf: require('../assets/images/flags/NF.png'),
      ng: require('../assets/images/flags/NG.png'),
      ni: require('../assets/images/flags/NI.png'),
      nl: require('../assets/images/flags/NL.png'),
      no: require('../assets/images/flags/NO.png'),
      np: require('../assets/images/flags/NP.png'),
      nr: require('../assets/images/flags/NR.png'),
      nu: require('../assets/images/flags/NU.png'),
      nz: require('../assets/images/flags/NZ.png'),
      om: require('../assets/images/flags/OM.png'),
      pa: require('../assets/images/flags/PA.png'),
      pe: require('../assets/images/flags/PE.png'),
      pf: require('../assets/images/flags/PF.png'),
      pg: require('../assets/images/flags/PG.png'),
      ph: require('../assets/images/flags/PH.png'),
      pk: require('../assets/images/flags/PK.png'),
      pl: require('../assets/images/flags/PL.png'),
      pm: require('../assets/images/flags/PM.png'),
      pr: require('../assets/images/flags/PR.png'),
      ps: require('../assets/images/flags/PS.png'),
      pt: require('../assets/images/flags/PT.png'),
      pw: require('../assets/images/flags/PW.png'),
      py: require('../assets/images/flags/PY.png'),
      qa: require('../assets/images/flags/QA.png'),
      re: require('../assets/images/flags/RE.png'),
      ro: require('../assets/images/flags/RO.png'),
      rs: require('../assets/images/flags/RS.png'),
      ru: require('../assets/images/flags/RU.png'),
      rw: require('../assets/images/flags/RW.png'),
      sa: require('../assets/images/flags/SA.png'),
      sb: require('../assets/images/flags/SB.png'),
      sc: require('../assets/images/flags/SC.png'),
      sd: require('../assets/images/flags/SD.png'),
      se: require('../assets/images/flags/SE.png'),
      sg: require('../assets/images/flags/SG.png'),
      sh: require('../assets/images/flags/SH.png'),
      si: require('../assets/images/flags/SI.png'),
      sj: require('../assets/images/flags/SJ.png'),
      sk: require('../assets/images/flags/SK.png'),
      sl: require('../assets/images/flags/SL.png'),
      sm: require('../assets/images/flags/SM.png'),
      sn: require('../assets/images/flags/SN.png'),
      so: require('../assets/images/flags/SO.png'),
      sr: require('../assets/images/flags/SR.png'),
      ss: require('../assets/images/flags/SS.png'),
      st: require('../assets/images/flags/ST.png'),
      sv: require('../assets/images/flags/SV.png'),
      sx: require('../assets/images/flags/SX.png'),
      sy: require('../assets/images/flags/SY.png'),
      sz: require('../assets/images/flags/SZ.png'),
      tc: require('../assets/images/flags/TC.png'),
      td: require('../assets/images/flags/TD.png'),
      tg: require('../assets/images/flags/TG.png'),
      th: require('../assets/images/flags/TH.png'),
      tj: require('../assets/images/flags/TJ.png'),
      tk: require('../assets/images/flags/TK.png'),
      tl: require('../assets/images/flags/TL.png'),
      tm: require('../assets/images/flags/TM.png'),
      tn: require('../assets/images/flags/TN.png'),
      to: require('../assets/images/flags/TO.png'),
      tr: require('../assets/images/flags/TR.png'),
      tt: require('../assets/images/flags/TT.png'),
      tv: require('../assets/images/flags/TV.png'),
      tw: require('../assets/images/flags/TW.png'),
      tz: require('../assets/images/flags/TZ.png'),
      ua: require('../assets/images/flags/UA.png'),
      ug: require('../assets/images/flags/UG.png'),
      us: require('../assets/images/flags/US.png'),
      uy: require('../assets/images/flags/UY.png'),
      uz: require('../assets/images/flags/UZ.png'),
      va: require('../assets/images/flags/VA.png'),
      vc: require('../assets/images/flags/VC.png'),
      ve: require('../assets/images/flags/VE.png'),
      vg: require('../assets/images/flags/VG.png'),
      vi: require('../assets/images/flags/VI.png'),
      vn: require('../assets/images/flags/VN.png'),
      vu: require('../assets/images/flags/VU.png'),
      wf: require('../assets/images/flags/WF.png'),
      ws: require('../assets/images/flags/WS.png'),
      ye: require('../assets/images/flags/YE.png'),
      yt: require('../assets/images/flags/YT.png'),
      za: require('../assets/images/flags/ZA.png'),
      zm: require('../assets/images/flags/ZM.png'),
      zw: require('../assets/images/flags/ZW.png'),
    };
  }

  get(name) {
    return this.flags[name];
  }
}

export default FlagResource.getInstance();
