export const offsets = {
  button: {
    inSpeed: 0x075cc288,               // [Buttons]                        -> in_speed
    inAttack: 0x075cc2e0               // [Buttons]                        -> in_attack
  },
  core: {
    levelName: BigInt(0x13c3e38),     // [Miscellaneous]                  -> LevelName
    clEntityList: BigInt(0x1a9e778),  // [Miscellaneous]                  -> cl_entitylist
    localPlayer: BigInt(0x1e4f288)    // [Miscellaneous]                  -> LocalPlayer
  },
  entity: {
    localOrigin: 0x0004,               // [DataMap.CBaseViewModel]         -> m_localOrigin
    iSignifierName: 0x0580,            // [RecvTable.DT_BaseEntity]        -> m_iSignifierName
    lastVisibleTime: 0x1a48           // [Miscellaneous]                  -> CPlayer!lastVisibleTime
  },
  item: {
    highlightFunctionBits: 0x02c0,     // [RecvTable.DT_HighlightSettings] -> m_highlightFunctionBits
    customScriptInt: 0x1628           // [RecvTable.DT_PropSurvival]      -> m_customScriptInt
  },
  player: {
    glowEnable: 0x03c0,                // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x8
    glowThroughWall: 0x3d0,           // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x10
    iTeamNum: 0x044c,                  // [RecvTable.DT_BaseEntity]        -> m_iTeamNum
    iName: 0x0589,                     // [RecvTable.DT_BaseEntity]        -> m_iName
    lifeState: 0x0798,                 // [RecvTable.DT_Player]            -> m_lifeState
    vecPunchWeaponAngle: 0x2440,      // [DataMap.C_Player]               -> m_currentFrameLocalPlayer.m_vecPunchWeapon_Angle
    viewAngle: 0x253c,                // [DataMap.C_Player]               -> m_ammoPoolCapacity - 0x14
    bleedoutState: 0x26d0             // [RecvTable.DT_Player]            -> m_bleedoutState
  }
};
