var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SubPrefectures_1 = new ol.format.GeoJSON();
var features_SubPrefectures_1 = format_SubPrefectures_1.readFeatures(json_SubPrefectures_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubPrefectures_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubPrefectures_1.addFeatures(features_SubPrefectures_1);
var lyr_SubPrefectures_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SubPrefectures_1, 
                style: style_SubPrefectures_1,
                interactive: true,
                title: '<img src="styles/legend/SubPrefectures_1.png" /> Sub-Prefectures'
            });
var format_Ecolesprofessionnelles_2 = new ol.format.GeoJSON();
var features_Ecolesprofessionnelles_2 = format_Ecolesprofessionnelles_2.readFeatures(json_Ecolesprofessionnelles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecolesprofessionnelles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecolesprofessionnelles_2.addFeatures(features_Ecolesprofessionnelles_2);cluster_Ecolesprofessionnelles_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Ecolesprofessionnelles_2
});
var lyr_Ecolesprofessionnelles_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Ecolesprofessionnelles_2, 
                style: style_Ecolesprofessionnelles_2,
                interactive: true,
                title: '<img src="styles/legend/Ecolesprofessionnelles_2.png" /> Ecoles professionnelles'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SubPrefectures_1.setVisible(false);lyr_Ecolesprofessionnelles_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SubPrefectures_1,lyr_Ecolesprofessionnelles_2];
lyr_SubPrefectures_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CLASS': 'CLASS', 'OBJECT_1': 'OBJECT_1', 'OBJECT_2': 'OBJECT_2', 'OBJECT_3': 'OBJECT_3', 'GISNAMEEN': 'GISNAMEEN', 'GISNAMEFR': 'GISNAMEFR', 'SOURCE': 'SOURCE', 'SOURCE2': 'SOURCE2', 'PROVIDER': 'PROVIDER', 'DATE_': 'DATE_', 'DATASTATUS': 'DATASTATUS', 'REMARKS': 'REMARKS', 'AREA_': 'AREA_', 'HECTARES': 'HECTARES', 'HOUSEHOLDS': 'HOUSEHOLDS', 'FEM_1996': 'FEM_1996', 'MAL_1996': 'MAL_1996', 'TOT_1996': 'TOT_1996', 'UTM_E_X': 'UTM_E_X', 'UTM_N_X': 'UTM_N_X', 'DENSITé': 'DENSITé', 'GlobalID': 'GlobalID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Ecolesprofessionnelles_2.set('fieldAliases', {'Id': 'Id', 'Zone': 'Zone', 'Nom': 'Nom', 'Filieres': 'Filieres', '1_': '1_', '2_': '2_', '3_': '3_', '4_': '4_', });
lyr_SubPrefectures_1.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'Range', 'CLASS': 'TextEdit', 'OBJECT_1': 'TextEdit', 'OBJECT_2': 'TextEdit', 'OBJECT_3': 'TextEdit', 'GISNAMEEN': 'TextEdit', 'GISNAMEFR': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCE2': 'TextEdit', 'PROVIDER': 'TextEdit', 'DATE_': 'DateTime', 'DATASTATUS': 'TextEdit', 'REMARKS': 'TextEdit', 'AREA_': 'TextEdit', 'HECTARES': 'TextEdit', 'HOUSEHOLDS': 'TextEdit', 'FEM_1996': 'TextEdit', 'MAL_1996': 'TextEdit', 'TOT_1996': 'TextEdit', 'UTM_E_X': 'TextEdit', 'UTM_N_X': 'TextEdit', 'DENSITé': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ecolesprofessionnelles_2.set('fieldImages', {'Id': 'Range', 'Zone': 'TextEdit', 'Nom': 'TextEdit', 'Filieres': 'TextEdit', '1_': 'TextEdit', '2_': 'TextEdit', '3_': 'TextEdit', '4_': 'TextEdit', });
lyr_SubPrefectures_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'CLASS': 'no label', 'OBJECT_1': 'no label', 'OBJECT_2': 'no label', 'OBJECT_3': 'no label', 'GISNAMEEN': 'inline label', 'GISNAMEFR': 'no label', 'SOURCE': 'no label', 'SOURCE2': 'no label', 'PROVIDER': 'no label', 'DATE_': 'no label', 'DATASTATUS': 'no label', 'REMARKS': 'no label', 'AREA_': 'no label', 'HECTARES': 'no label', 'HOUSEHOLDS': 'no label', 'FEM_1996': 'no label', 'MAL_1996': 'no label', 'TOT_1996': 'no label', 'UTM_E_X': 'no label', 'UTM_N_X': 'no label', 'DENSITé': 'no label', 'GlobalID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Ecolesprofessionnelles_2.set('fieldLabels', {'Id': 'no label', 'Zone': 'inline label', 'Nom': 'inline label', 'Filieres': 'inline label', '1_': 'inline label', '2_': 'inline label', '3_': 'inline label', '4_': 'inline label', });
lyr_Ecolesprofessionnelles_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});