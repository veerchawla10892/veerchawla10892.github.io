(function(){
    var script = {
 "class": "Player",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.IconButton_AE1CB054_B0BF_49F5_41D4_F70175B7B8EF",
  "this.IconButton_90BD2783_B0B9_5753_41D7_E282EB31067D",
  "this.IconButton_AF5826D0_B0B9_D6CD_4193_EB758AB984CA"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "start": "this.playAudioList([this.audio_AEC738ED_B0E9_5AD4_41DF_BFEBA524FC79]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AE1CB054_B0BF_49F5_41D4_F70175B7B8EF], 'cardboardAvailable')",
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "label": "Wash",
 "id": "panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 94.95,
   "yaw": -95.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB"
  },
  {
   "backwardYaw": -159.28,
   "yaw": -164.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_BCD18A60_AF6B_786F_41C6_999D25A7E488",
  "this.overlay_BB56CB07_AF69_59BC_41D5_8AAAA4B334D5",
  "this.overlay_91AB7A4B_B0E9_B9DC_41C6_F8410005981F"
 ],
 "thumbnailUrl": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A428C271_AF59_4BB0_4146_100E984686D4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 15.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_A4BD1D59_B41A_AF62_41DC_9986CB48FF91",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -79.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BA0DBDC7_B41A_AF6E_41CF_0D0942C74D85",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "label": "S Bedroom",
 "id": "panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 55.01,
   "yaw": -103.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_BAEC8BFF_AF6B_B855_41CD_B9AE1EF418C4"
 ],
 "thumbnailUrl": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "label": "console",
 "id": "panorama_A428C271_AF59_4BB0_4146_100E984686D4",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 172.08,
   "yaw": -88.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB"
  },
  {
   "backwardYaw": -126.88,
   "yaw": -46.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_A0F13F6F_AF5B_59A6_41DE_E941CBAF03CE",
  "this.overlay_A150859E_AF5B_4962_41C4_B7A3D382CB9C"
 ],
 "thumbnailUrl": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "class": "Panorama",
 "label": "D Bedroom",
 "id": "panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 88.92,
   "yaw": 114.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C"
  },
  {
   "backwardYaw": -111.8,
   "yaw": -39.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_A1C76112_AF59_C96B_41D9_10421501DECE",
  "this.overlay_A1D9D345_AF5E_C9F4_41D9_16AEDF0A816C"
 ],
 "thumbnailUrl": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 68.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BA4A2E13_B41A_ACE6_41D2_0AF3DFC206FC",
 "automaticZoomSpeed": 10
},
{
 "buttonZoomOut": "this.IconButton_AF5826D0_B0B9_D6CD_4193_EB758AB984CA",
 "buttonCardboardView": "this.IconButton_AE1CB054_B0BF_49F5_41D4_F70175B7B8EF",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "buttonZoomIn": "this.IconButton_90BD2783_B0B9_5753_41D7_E282EB31067D",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "class": "Panorama",
 "label": "Washroom2",
 "id": "panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -95.22,
   "yaw": 94.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_BB27B571_AF6F_4841_4198_0B07A8167278"
 ],
 "thumbnailUrl": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 74.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BA161DD4_B41A_AF62_41D6_A91B02205396",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -124.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_A565DD08_B41A_ACE2_41E1_14F87F20C083",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -7.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BAF04D99_B41A_AFE2_41DE_FD376E4AB35F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 130.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BA36ADF9_B41A_AF22_41B1_20700A23CA6E",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "label": "Living",
 "id": "panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.44,
   "yaw": 172.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A428C271_AF59_4BB0_4146_100E984686D4"
  },
  {
   "backwardYaw": -49.25,
   "yaw": -105.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_BAC2B747_AF59_499E_41CB_58A9A71443BD",
  "this.overlay_BB68C7DA_AF57_C8A8_41DC_6B3DED52218A",
  "this.overlay_B04CB81C_AFA9_B880_41C4_6B39CE17402A",
  "this.overlay_90284058_B0AE_C9FD_41E1_6390642630DA"
 ],
 "thumbnailUrl": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 17.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_A4A26D42_B41A_AF66_41D8_9079B3497C6F",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "label": "Mandir",
 "id": "panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -39.2,
   "yaw": -111.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_BCB11CAA_AF69_58FA_41E4_4EEB81FD5237"
 ],
 "thumbnailUrl": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "class": "Panorama",
 "label": "Dining",
 "id": "panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -103.26,
   "yaw": 55.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B"
  },
  {
   "backwardYaw": 84.9,
   "yaw": 104.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0"
  },
  {
   "backwardYaw": 100.73,
   "yaw": -162.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7"
  },
  {
   "backwardYaw": -105.52,
   "yaw": -49.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB"
  },
  {
   "backwardYaw": 114.55,
   "yaw": 88.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_A04D694D_AF5F_D9F3_41D3_4064FF948A41",
  "this.overlay_BC7E8051_AF5E_C797_41C0_C2AF71BD6A4B",
  "this.overlay_A07EAFEF_AF59_D887_41E2_4FD907CA8B76",
  "this.overlay_BDC10FD4_AF5A_D887_41CD_C53F7E188B07",
  "this.overlay_A091BF4B_AF5B_F984_41D8_CF3AC9F76001"
 ],
 "thumbnailUrl": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 140.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BAEC1D8D_B41A_AFE2_41E2_CC33B5284B04",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "label": "M bedroom",
 "id": "panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -46.23,
   "yaw": -126.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A428C271_AF59_4BB0_4146_100E984686D4"
  },
  {
   "backwardYaw": -164.06,
   "yaw": -159.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_BDAC7237_AF56_CBE3_41DD_41154E35798E",
  "this.overlay_B7AB88E5_AF69_5863_41E5_C4AB02248525"
 ],
 "thumbnailUrl": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -85.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_A5739D14_B41A_ACE2_41B9_AB15711AA695",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "Video",
 "label": "yt1s.com - Video Bhool Bhulaiyaa 2 Title Track Kartik Kiara Tabu  Tanishk Neeraj Anees B Bhushan K",
 "scaleMode": "fit_inside",
 "width": 1920,
 "loop": false,
 "id": "video_AFDB9FD2_B0A9_D6CD_4192_773E988CBF05",
 "thumbnailUrl": "media/video_AFDB9FD2_B0A9_D6CD_4192_773E988CBF05_t.jpg",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_AFDB9FD2_B0A9_D6CD_4192_773E988CBF05.mp4"
 }
},
{
 "items": [
  {
   "media": "this.panorama_A428C271_AF59_4BB0_4146_100E984686D4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A428C271_AF59_4BB0_4146_100E984686D4_camera"
  },
  {
   "media": "this.panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_camera"
  },
  {
   "media": "this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_camera"
  },
  {
   "media": "this.panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_camera"
  },
  {
   "media": "this.panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_camera"
  },
  {
   "media": "this.panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_camera"
  },
  {
   "media": "this.panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_camera"
  },
  {
   "media": "this.panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_camera"
  },
  {
   "media": "this.panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_camera"
  },
  {
   "media": "this.panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_camera"
  },
  {
   "media": "this.panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "id": "audio_AEC738ED_B0E9_5AD4_41DF_BFEBA524FC79",
 "audio": {
  "mp3Url": "media/audio_AEC738ED_B0E9_5AD4_41DF_BFEBA524FC79.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_AEC738ED_B0E9_5AD4_41DF_BFEBA524FC79.ogg"
 },
 "data": {
  "label": "Castle_in_the_sky_music_box_(getmp3.pro)"
 }
},
{
 "initialPosition": {
  "yaw": 91.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BA299DED_B41A_AF22_41D3_C6B5C12B572A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -75.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_A484DD2B_B41A_AF26_41E3_817E942C1530",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "label": "Washroom1",
 "id": "panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 104.5,
   "yaw": 84.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_B7463825_AF69_C7F8_41CB_626830EC9C24"
 ],
 "thumbnailUrl": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 53.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BAFA4DA5_B41A_AF22_41DF_884ADB95A0DE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 84.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_A491ED37_B41A_AF2E_41D9_DB43E4488153",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_AFDB9FD2_B0A9_D6CD_4192_773E988CBF05",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_A552BCF7_B41A_AD2E_41E6_94A38697D5D2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A552BCF7_B41A_AD2E_41E6_94A38697D5D2, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_A552BCF7_B41A_AD2E_41E6_94A38697D5D2",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 20.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_A5793D20_B41A_AF22_41C2_04F634720DE1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -95.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BA05DDBC_B41A_AF22_41DD_EC2A75B2F1E7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 133.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_A4AC7D4E_B41A_AF7E_41D5_E1DDB099B078",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -91.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BA438E06_B41A_ACEE_41E1_949FF8BCD69F",
 "automaticZoomSpeed": 10
},
{
 "class": "Panorama",
 "label": "Kitchen",
 "id": "panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -162.8,
   "yaw": 100.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_BD78233B_AF59_C9F2_41E0_D319B118B684"
 ],
 "thumbnailUrl": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -65.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BA22EDE0_B41A_AF22_41E0_D1661392D4DD",
 "automaticZoomSpeed": 10
},
{
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": 76.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_BAFD0DB0_B41A_AF22_41E6_55667A88D984",
 "automaticZoomSpeed": 10
},
{
 "toolTipShadowVerticalLength": 0,
 "paddingBottom": 0,
 "toolTipTextShadowOpacity": 0,
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "transitionDuration": 500,
 "progressRight": 0,
 "width": "100%",
 "playbackBarHeadBorderColor": "#000000",
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "borderSize": 0,
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "vrPointerSelectionTime": 2000,
 "height": "100%",
 "playbackBarHeadShadow": true,
 "toolTipBorderColor": "#767676",
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipDisplayTime": 600,
 "progressBottom": 0,
 "playbackBarBottom": 5,
 "playbackBarOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 10,
 "progressBorderColor": "#000000",
 "paddingRight": 0,
 "toolTipPaddingLeft": 6,
 "toolTipFontWeight": "normal",
 "propagateClick": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "toolTipFontColor": "#606060",
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBorderSize": 0,
 "progressBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "borderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "toolTipFontFamily": "Arial",
 "minHeight": 50,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#000000",
 "toolTipOpacity": 1,
 "minWidth": 100,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontStyle": "normal",
 "playbackBarRight": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowSpread": 0
},
{
 "cursor": "hand",
 "class": "IconButton",
 "paddingBottom": 0,
 "id": "IconButton_AE1CB054_B0BF_49F5_41D4_F70175B7B8EF",
 "maxHeight": 56,
 "maxWidth": 56,
 "iconURL": "skin/IconButton_AE1CB054_B0BF_49F5_41D4_F70175B7B8EF.png",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "right": "2.11%",
 "width": 56,
 "transparencyActive": false,
 "minHeight": 1,
 "height": 56,
 "bottom": "1.75%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingRight": 0,
 "data": {
  "name": "IconButton14318"
 },
 "horizontalAlign": "center",
 "propagateClick": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "paddingBottom": 0,
 "id": "IconButton_90BD2783_B0B9_5753_41D7_E282EB31067D",
 "left": "48.01%",
 "width": 30,
 "iconURL": "skin/IconButton_90BD2783_B0B9_5753_41D7_E282EB31067D.png",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_90BD2783_B0B9_5753_41D7_E282EB31067D_rollover.png",
 "transparencyActive": false,
 "borderRadius": 0,
 "minHeight": 0,
 "height": 30,
 "bottom": "2.3%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_90BD2783_B0B9_5753_41D7_E282EB31067D_pressed.png",
 "paddingRight": 0,
 "data": {
  "name": "Button4087"
 },
 "horizontalAlign": "center",
 "propagateClick": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "paddingBottom": 0,
 "id": "IconButton_AF5826D0_B0B9_D6CD_4193_EB758AB984CA",
 "width": 30,
 "iconURL": "skin/IconButton_AF5826D0_B0B9_D6CD_4193_EB758AB984CA.png",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "right": "47.23%",
 "rollOverIconURL": "skin/IconButton_AF5826D0_B0B9_D6CD_4193_EB758AB984CA_rollover.png",
 "transparencyActive": false,
 "borderRadius": 0,
 "minHeight": 0,
 "height": 30,
 "bottom": "2.3%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_AF5826D0_B0B9_D6CD_4193_EB758AB984CA_pressed.png",
 "paddingRight": 0,
 "data": {
  "name": "Button4086"
 },
 "horizontalAlign": "center",
 "propagateClick": false
},
{
 "maps": [
  {
   "hfov": 13.78,
   "yaw": -95.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5, this.camera_A5739D14_B41A_ACE2_41B9_AB15711AA695); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B3735871_AF76_B822_41E3_E3290BF651AE",
   "pitch": -2.82,
   "yaw": -95.22,
   "hfov": 13.78,
   "distance": 100
  }
 ],
 "id": "overlay_BCD18A60_AF6B_786F_41C6_999D25A7E488",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.8,
   "yaw": 149.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.2
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B3730871_AF76_B822_41DE_676873AA038D",
   "pitch": 0.2,
   "yaw": 149.47,
   "hfov": 13.8,
   "distance": 100
  }
 ],
 "id": "overlay_BB56CB07_AF69_59BC_41D5_8AAAA4B334D5",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.75,
   "yaw": -164.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.83
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534, this.camera_A5793D20_B41A_AF22_41C2_04F634720DE1); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AE866496_B0EB_4975_41C2_B62263C10CF5",
   "pitch": -4.83,
   "yaw": -164.06,
   "hfov": 13.75,
   "distance": 100
  }
 ],
 "id": "overlay_91AB7A4B_B0E9_B9DC_41C6_F8410005981F",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.71,
   "yaw": -103.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C, this.camera_A565DD08_B41A_ACE2_41E1_14F87F20C083); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B373A871_AF76_B822_41E0_55BE06234212",
   "pitch": -6.59,
   "yaw": -103.26,
   "hfov": 13.71,
   "distance": 100
  }
 ],
 "id": "overlay_BAEC8BFF_AF6B_B855_41CD_B9AE1EF418C4",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.79,
   "yaw": -88.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB, this.camera_BAF04D99_B41A_AFE2_41DE_FD376E4AB35F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B377186D_AF76_B822_41E3_3121D7EFBA1E",
   "pitch": -1.56,
   "yaw": -88.44,
   "hfov": 13.79,
   "distance": 100
  }
 ],
 "id": "overlay_A0F13F6F_AF5B_59A6_41DE_E941CBAF03CE",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.69,
   "yaw": -46.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.09
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534, this.camera_BAFA4DA5_B41A_AF22_41DF_884ADB95A0DE); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B376886E_AF76_B83E_41CA_8A79EC15E787",
   "pitch": -7.09,
   "yaw": -46.23,
   "hfov": 13.69,
   "distance": 100
  }
 ],
 "id": "overlay_A150859E_AF5B_4962_41C4_B7A3D382CB9C",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.76,
   "yaw": 114.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.32
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C, this.camera_BA438E06_B41A_ACEE_41E1_949FF8BCD69F); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B376486F_AF76_B83E_41C8_CFBB0AE7CADC",
   "pitch": -4.32,
   "yaw": 114.55,
   "hfov": 13.76,
   "distance": 100
  }
 ],
 "id": "overlay_A1C76112_AF59_C96B_41D9_10421501DECE",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.79,
   "yaw": -39.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.32
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4, this.camera_BA4A2E13_B41A_ACE6_41D2_0AF3DFC206FC); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B375F86F_AF76_B83E_41D3_3FAB78BB7989",
   "pitch": -2.32,
   "yaw": -39.2,
   "hfov": 13.79,
   "distance": 100
  }
 ],
 "id": "overlay_A1D9D345_AF5E_C9F4_41D9_16AEDF0A816C",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.8,
   "yaw": 94.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.31
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B, this.camera_A491ED37_B41A_AF2E_41D9_DB43E4488153); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B3725871_AF76_B822_41C8_6DDFB397A218",
   "pitch": -1.31,
   "yaw": 94.95,
   "hfov": 13.8,
   "distance": 100
  }
 ],
 "id": "overlay_BB27B571_AF6F_4841_4198_0B07A8167278",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.71,
   "yaw": 122.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B373A870_AF76_B822_41D0_277DC5E090A8",
   "pitch": -6.59,
   "yaw": 122.84,
   "hfov": 13.71,
   "distance": 100
  }
 ],
 "id": "overlay_BAC2B747_AF59_499E_41CB_58A9A71443BD",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.76,
   "yaw": -105.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C, this.camera_BA36ADF9_B41A_AF22_41B1_20700A23CA6E); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B3735870_AF76_B822_41D7_A256C6329D74",
   "pitch": -4.58,
   "yaw": -105.52,
   "hfov": 13.76,
   "distance": 100
  }
 ],
 "id": "overlay_BB68C7DA_AF57_C8A8_41DC_6B3DED52218A",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.75,
   "yaw": 172.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.08
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A428C271_AF59_4BB0_4146_100E984686D4, this.camera_BA299DED_B41A_AF22_41D3_C6B5C12B572A); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B3CCEF07_AFAE_B88E_41CA_1E3EA22EC9B0",
   "pitch": -5.08,
   "yaw": 172.08,
   "hfov": 13.75,
   "distance": 100
  }
 ],
 "id": "overlay_B04CB81C_AFA9_B880_41C4_6B39CE17402A",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "class": "VideoPanoramaOverlay",
 "autoplay": true,
 "id": "overlay_90284058_B0AE_C9FD_41E1_6390642630DA",
 "videoVisibleOnStop": false,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_90284058_B0AE_C9FD_41E1_6390642630DA_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "pitch": -13.53,
 "useHandCursor": true,
 "yaw": 60.57,
 "vfov": 25.62,
 "data": {
  "label": "Video"
 },
 "rotationY": -28.47,
 "rotationX": 15.14,
 "enabledInCardboard": true,
 "roll": -7.71,
 "hfov": 41.88,
 "distance": 50,
 "stateChange": "if(this.overlay_90284058_B0AE_C9FD_41E1_6390642630DA.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_90284058_B0AE_C9FD_41E1_6390642630DA', [this.overlay_90284058_B0AE_C9FD_41E1_6390642630DA]); } else { this.resumeGlobalAudios('overlay_90284058_B0AE_C9FD_41E1_6390642630DA'); }",
 "blending": 0,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_AFDB9FD2_B0A9_D6CD_4192_773E988CBF05.mp4"
 }
},
{
 "maps": [
  {
   "hfov": 13.74,
   "yaw": -111.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3, this.camera_BAEC1D8D_B41A_AFE2_41E2_CC33B5284B04); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B373D871_AF76_B822_41E4_EC9240DF5156",
   "pitch": -5.33,
   "yaw": -111.8,
   "hfov": 13.74,
   "distance": 100
  }
 ],
 "id": "overlay_BCB11CAA_AF69_58FA_41E4_4EEB81FD5237",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.78,
   "yaw": -49.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB, this.camera_BA161DD4_B41A_AF62_41D6_A91B02205396); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B375986F_AF76_B83E_41C8_D18604595E6F",
   "pitch": -2.82,
   "yaw": -49.25,
   "hfov": 13.78,
   "distance": 100
  }
 ],
 "id": "overlay_A04D694D_AF5F_D9F3_41D3_4064FF948A41",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.79,
   "yaw": 55.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B, this.camera_BAFD0DB0_B41A_AF22_41E6_55667A88D984); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B375486F_AF76_B83E_41A3_A42108FC07F1",
   "pitch": -1.56,
   "yaw": 55.01,
   "hfov": 13.79,
   "distance": 100
  }
 ],
 "id": "overlay_BC7E8051_AF5E_C797_41C0_C2AF71BD6A4B",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.74,
   "yaw": 88.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3, this.camera_BA22EDE0_B41A_AF22_41E0_D1661392D4DD); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B375086F_AF76_B83E_41DE_FBE76858573B",
   "pitch": -5.33,
   "yaw": 88.92,
   "hfov": 13.74,
   "distance": 100
  }
 ],
 "id": "overlay_A07EAFEF_AF59_D887_41E2_4FD907CA8B76",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.75,
   "yaw": 104.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.08
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0, this.camera_BA05DDBC_B41A_AF22_41DD_EC2A75B2F1E7); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B374B86F_AF76_B83D_41E3_1ED5C4331143",
   "pitch": -5.08,
   "yaw": 104.5,
   "hfov": 13.75,
   "distance": 100
  }
 ],
 "id": "overlay_BDC10FD4_AF5A_D887_41CD_C53F7E188B07",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.8,
   "yaw": -162.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7, this.camera_BA0DBDC7_B41A_AF6E_41CF_0D0942C74D85); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B3744870_AF76_B822_41E5_25289F6BF002",
   "pitch": -0.56,
   "yaw": -162.8,
   "hfov": 13.8,
   "distance": 100
  }
 ],
 "id": "overlay_A091BF4B_AF5B_F984_41D8_CF3AC9F76001",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.77,
   "yaw": -159.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B, this.camera_A4BD1D59_B41A_AF62_41DC_9986CB48FF91); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B372F870_AF76_B822_41C1_C05163C8AB1C",
   "pitch": -3.82,
   "yaw": -159.28,
   "hfov": 13.77,
   "distance": 100
  }
 ],
 "id": "overlay_BDAC7237_AF56_CBE3_41DD_41154E35798E",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.78,
   "yaw": -126.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A428C271_AF59_4BB0_4146_100E984686D4, this.camera_A4AC7D4E_B41A_AF7E_41D5_E1DDB099B078); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B372B870_AF76_B822_41E2_63C56E59984A",
   "pitch": -2.82,
   "yaw": -126.88,
   "hfov": 13.78,
   "distance": 100
  }
 ],
 "id": "overlay_B7AB88E5_AF69_5863_41E5_C4AB02248525",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.8,
   "yaw": 84.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.81
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C, this.camera_A484DD2B_B41A_AF26_41E3_817E942C1530); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B3729871_AF76_B822_41E3_E1DB09694C53",
   "pitch": -0.81,
   "yaw": 84.9,
   "hfov": 13.8,
   "distance": 100
  }
 ],
 "id": "overlay_B7463825_AF69_C7F8_41CB_626830EC9C24",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "maps": [
  {
   "hfov": 13.72,
   "yaw": 100.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C, this.camera_A4A26D42_B41A_AF66_41D8_9079B3497C6F); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B3740870_AF76_B822_41DA_6F0174599742",
   "pitch": -6.33,
   "yaw": 100.73,
   "hfov": 13.72,
   "distance": 100
  }
 ],
 "id": "overlay_BD78233B_AF59_C9F2_41E0_D319B118B684",
 "data": {
  "label": "Circle Point 03"
 }
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B3735871_AF76_B822_41E3_E3290BF651AE",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_1_HS_1_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B3730871_AF76_B822_41DE_676873AA038D",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A485DCA8_AF59_7F54_41AA_928AD31D3C6B_0_HS_2_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_AE866496_B0EB_4975_41C2_B62263C10CF5",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A49E621C_AF59_4B6C_41E4_1CE6E894EF2B_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B373A871_AF76_B822_41E0_55BE06234212",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B377186D_AF76_B822_41E3_3121D7EFBA1E",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A428C271_AF59_4BB0_4146_100E984686D4_1_HS_1_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B376886E_AF76_B83E_41CA_8A79EC15E787",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B376486F_AF76_B83E_41C8_CFBB0AE7CADC",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4A4F59B_AF59_C977_418E_AFF19EED27C3_1_HS_1_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B375F86F_AF76_B83E_41D3_3FAB78BB7989",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A31F90B4_AF59_48BD_41D3_91F3AC1F29F5_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B3725871_AF76_B822_41C8_6DDFB397A218",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B373A870_AF76_B822_41D0_277DC5E090A8",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_1_HS_1_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B3735870_AF76_B822_41D7_A256C6329D74",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A48B8391_AF59_C975_41CA_290BF87C7FAB_0_HS_2_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B3CCEF07_AFAE_B88E_41CA_1E3EA22EC9B0",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4A7A7A5_AF59_495C_41E1_0E3230E3CAB4_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B373D871_AF76_B822_41E4_EC9240DF5156",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B375986F_AF76_B83E_41C8_D18604595E6F",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_1_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B375486F_AF76_B83E_41A3_A42108FC07F1",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_2_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B375086F_AF76_B83E_41DE_FBE76858573B",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_3_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B374B86F_AF76_B83D_41E3_1ED5C4331143",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4AFCF53_AF59_F9F6_41CF_81F19D87267C_1_HS_4_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B3744870_AF76_B822_41E5_25289F6BF002",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B372F870_AF76_B822_41C1_C05163C8AB1C",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A4E50D8C_AF59_B96C_41E0_E47E3F2BB534_1_HS_1_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B372B870_AF76_B822_41E2_63C56E59984A",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A487E6A0_AF59_4B55_41DB_D28E141A6DF0_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B3729871_AF76_B822_41E3_E1DB09694C53",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A37C998B_AF59_D956_41E0_EC4506BA90D7_1_HS_0_0.png",
   "width": 920,
   "class": "ImageResourceLevel",
   "height": 1380
  }
 ],
 "id": "AnimatedImageResource_B3740870_AF76_B822_41DA_6F0174599742",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
}],
 "paddingLeft": 0,
 "defaultVRPointer": "laser",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "vrPolyfillScale": 0.5,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "minWidth": 20,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } }
 },
 "paddingRight": 0,
 "data": {
  "name": "Player693"
 },
 "horizontalAlign": "left",
 "layout": "absolute",
 "downloadEnabled": true,
 "gap": 10,
 "propagateClick": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
