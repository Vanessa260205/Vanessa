var wms_layers = [];

var format_PL_RTRW_Blora_0 = new ol.format.GeoJSON();
var features_PL_RTRW_Blora_0 = format_PL_RTRW_Blora_0.readFeatures(json_PL_RTRW_Blora_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL_RTRW_Blora_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL_RTRW_Blora_0.addFeatures(features_PL_RTRW_Blora_0);
var lyr_PL_RTRW_Blora_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PL_RTRW_Blora_0, 
                style: style_PL_RTRW_Blora_0,
                popuplayertitle: 'PL_RTRW_Blora',
                interactive: true,
                title: '<img src="styles/legend/PL_RTRW_Blora_0.png" /> PL_RTRW_Blora'
            });

lyr_PL_RTRW_Blora_0.setVisible(true);
var layersList = [lyr_PL_RTRW_Blora_0];
lyr_PL_RTRW_Blora_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'JNSSWH': 'JNSSWH', 'TNMSWH': 'TNMSWH', 'OTODAN': 'OTODAN', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'KLSRMP': 'KLSRMP', 'KODATC': 'KODATC', 'JNSPDG': 'JNSPDG', 'JNSPHN': 'JNSPHN', 'JNSHTN': 'JNSHTN', 'KRPPHN': 'KRPPHN', 'KLSLCO': 'KLSLCO', 'TKTHTN': 'TKTHTN', 'TIPHTN': 'TIPHTN', 'JNSSMK': 'JNSSMK', 'TPRAWA': 'TPRAWA', 'TPGNGN': 'TPGNGN', 'TPAIR': 'TPAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'JNSWDK': 'JNSWDK', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'uid': 'uid', 'user': 'user', 'timestamp': 'timestamp', 'layer': 'layer', 'smoothness': 'smoothness', 'railway': 'railway', 'tunnel': 'tunnel', 'width': 'width', 'name': 'name', 'bridge': 'bridge', 'highway': 'highway', 'oneway': 'oneway', 'surface': 'surface', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_PL_RTRW_Blora_0.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'JNSSWH': '', 'TNMSWH': '', 'OTODAN': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'KLSRMP': '', 'KODATC': '', 'JNSPDG': '', 'JNSPHN': '', 'JNSHTN': '', 'KRPPHN': '', 'KLSLCO': '', 'TKTHTN': '', 'TIPHTN': '', 'JNSSMK': '', 'TPRAWA': '', 'TPGNGN': '', 'TPAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'JNSWDK': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'osm_id': '', 'osm_type': '', 'uid': '', 'user': '', 'timestamp': '', 'layer': '', 'smoothness': '', 'railway': '', 'tunnel': '', 'width': '', 'name': '', 'bridge': '', 'highway': '', 'oneway': '', 'surface': '', 'BUFF_DIST': '', 'ORIG_FID': '', 'Shape_Le_2': '', 'Shape_Area': '', });
lyr_PL_RTRW_Blora_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'JNSSWH': 'no label', 'TNMSWH': 'no label', 'OTODAN': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'KLSRMP': 'no label', 'KODATC': 'no label', 'JNSPDG': 'no label', 'JNSPHN': 'no label', 'JNSHTN': 'no label', 'KRPPHN': 'no label', 'KLSLCO': 'no label', 'TKTHTN': 'no label', 'TIPHTN': 'no label', 'JNSSMK': 'no label', 'TPRAWA': 'no label', 'TPGNGN': 'no label', 'TPAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'JNSWDK': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'uid': 'no label', 'user': 'no label', 'timestamp': 'no label', 'layer': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'tunnel': 'no label', 'width': 'no label', 'name': 'no label', 'bridge': 'no label', 'highway': 'no label', 'oneway': 'no label', 'surface': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_PL_RTRW_Blora_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});