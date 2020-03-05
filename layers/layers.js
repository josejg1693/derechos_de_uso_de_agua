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
var format_VALOR_FINAL_1 = new ol.format.GeoJSON();
var features_VALOR_FINAL_1 = format_VALOR_FINAL_1.readFeatures(json_VALOR_FINAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALOR_FINAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VALOR_FINAL_1.addFeatures(features_VALOR_FINAL_1);
var lyr_VALOR_FINAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VALOR_FINAL_1, 
                style: style_VALOR_FINAL_1,
                interactive: true,
                title: '<img src="styles/legend/VALOR_FINAL_1.png" /> VALOR_FINAL'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_VALOR_FINAL_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_VALOR_FINAL_1];
lyr_VALOR_FINAL_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AAA': 'AAA', 'ALA': 'ALA', 'No_JUA': 'No_JUA', 'ABREV_JUA': 'ABREV_JUA', 'Nombre_JUA': 'Nombre_JUA', 'Direccion': 'Direccion', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIAS': 'PROVINCIAS', 'DISTRITOS': 'DISTRITOS', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'ZONA': 'ZONA', 'CAPACITA_2': 'CAPACITA_2', 'CAPACITA_3': 'CAPACITA_3', 'CAPACITA_4': 'CAPACITA_4', 'CONTEO_S_2': 'CONTEO_S_2', 'CONTEO_T_1': 'CONTEO_T_1', 'CONTEO_T_2': 'CONTEO_T_2', 'CONTEO_T_3': 'CONTEO_T_3', 'CONTEO_T_4': 'CONTEO_T_4', 'CONTEO_T_5': 'CONTEO_T_5', 'CONTEO_T_6': 'CONTEO_T_6', 'CONTEO_T_7': 'CONTEO_T_7', 'CONTEO_T_8': 'CONTEO_T_8', 'CONTEO_T_9': 'CONTEO_T_9', 'CONTEO__10': 'CONTEO__10', 'Categ_2015': 'Categ_2015', 'Categ_2016': 'Categ_2016', 'Categ_2017': 'Categ_2017', 'Categ_2018': 'Categ_2018', 'PE_TOTAL_1': 'PE_TOTAL_1', 'PE_TOTAL_2': 'PE_TOTAL_2', 'PE_TOTAL_3': 'PE_TOTAL_3', 'PE_TOTAL_4': 'PE_TOTAL_4', 'PE_TOTAL_5': 'PE_TOTAL_5', 'CLASE': 'CLASE', 'TIPO': 'TIPO', 'N�_DE_USUA': 'N�_DE_USUA', 'AREA_BAJO': 'AREA_BAJO', 'N�_COMISIO': 'N�_COMISIO', 'N�_COMIT�S': 'N�_COMIT�S', 'N�_USUARIO': 'N�_USUARIO', 'ARCDIG': 'ARCDIG', });
lyr_VALOR_FINAL_1.set('fieldImages', {'OBJECTID': '', 'AAA': '', 'ALA': '', 'No_JUA': '', 'ABREV_JUA': '', 'Nombre_JUA': '', 'Direccion': '', 'DEPARTAMEN': '', 'PROVINCIAS': '', 'DISTRITOS': '', 'ESTE': '', 'NORTE': '', 'ZONA': '', 'CAPACITA_2': '', 'CAPACITA_3': '', 'CAPACITA_4': '', 'CONTEO_S_2': '', 'CONTEO_T_1': '', 'CONTEO_T_2': '', 'CONTEO_T_3': '', 'CONTEO_T_4': '', 'CONTEO_T_5': '', 'CONTEO_T_6': '', 'CONTEO_T_7': '', 'CONTEO_T_8': '', 'CONTEO_T_9': '', 'CONTEO__10': '', 'Categ_2015': '', 'Categ_2016': '', 'Categ_2017': '', 'Categ_2018': '', 'PE_TOTAL_1': '', 'PE_TOTAL_2': '', 'PE_TOTAL_3': '', 'PE_TOTAL_4': '', 'PE_TOTAL_5': '', 'CLASE': '', 'TIPO': '', 'N�_DE_USUA': '', 'AREA_BAJO': '', 'N�_COMISIO': '', 'N�_COMIT�S': '', 'N�_USUARIO': '', 'ARCDIG': '', });
lyr_VALOR_FINAL_1.set('fieldLabels', {'OBJECTID': 'no label', 'AAA': 'no label', 'ALA': 'no label', 'No_JUA': 'no label', 'ABREV_JUA': 'no label', 'Nombre_JUA': 'no label', 'Direccion': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIAS': 'no label', 'DISTRITOS': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', 'ZONA': 'no label', 'CAPACITA_2': 'no label', 'CAPACITA_3': 'no label', 'CAPACITA_4': 'no label', 'CONTEO_S_2': 'no label', 'CONTEO_T_1': 'no label', 'CONTEO_T_2': 'no label', 'CONTEO_T_3': 'no label', 'CONTEO_T_4': 'no label', 'CONTEO_T_5': 'no label', 'CONTEO_T_6': 'no label', 'CONTEO_T_7': 'no label', 'CONTEO_T_8': 'no label', 'CONTEO_T_9': 'no label', 'CONTEO__10': 'no label', 'Categ_2015': 'no label', 'Categ_2016': 'no label', 'Categ_2017': 'no label', 'Categ_2018': 'no label', 'PE_TOTAL_1': 'no label', 'PE_TOTAL_2': 'no label', 'PE_TOTAL_3': 'no label', 'PE_TOTAL_4': 'no label', 'PE_TOTAL_5': 'no label', 'CLASE': 'no label', 'TIPO': 'no label', 'N�_DE_USUA': 'no label', 'AREA_BAJO': 'no label', 'N�_COMISIO': 'no label', 'N�_COMIT�S': 'no label', 'N�_USUARIO': 'no label', 'ARCDIG': 'no label', });
lyr_VALOR_FINAL_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});