import {ParallaxScrollView} from "@/components/ParallaxScrollView";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {useState} from "react";
import RadioField from "@/components/RadioField";
import TextField from "@/components/TextField";
import {ThemedButtonFixed} from "@/components/ThemedButton";

export default function FormExtintorScreen() {
    const router = useRouter();

    const [numeroFabricacao, setNumeroFabricacao] = useState("");
    const [demarcacaoPisoChecked, setDemarcacaoPisoChecked] = useState("nao");
    const [desobstrucaoChecked, setDesobstrucaoChecked] = useState("nao");
    const [fixacaoSuporteChecked, setFixacaoSuporteChecked] = useState("nao");
    const [integridadeEstruturaChecked, setIntegridadeEstruturaChecked] = useState("nao");
    const [placaIdentificacao, setPlacaIdentificacao] = useState("");
    const [pressaoManometroChecked, setPressaoManometroChecked] = useState("nao");
    const [validadeChecked, setValidadeChecked] = useState("nao");
    const [loteTipo, setLoteTipo] = useState("lote1");
    const [dataProximaRecarga, setDataProximaRecarga] = useState("");
    const [dataTesteHidrostatico, setDataTesteHidrostatico] = useState("");
    const [extintorTipo, setExtintorTipo] = useState("co2");

    return (
        <ParallaxScrollView
            headerBackgroundColor={"#13D284"}
            textComponent={"Extintores (Conformidade)"}
            nameIcon={""}
            component={
                <TouchableOpacity onPress={() => router.back()}>
                    <View>
                        <Image style={{ width: 50, height: 50, top: -7 }} source={require("../../../assets/images/back-icon.png")}></Image>
                    </View>
                </TouchableOpacity>
            }
            headerTopPosition={-80}>
            <View style={{ borderWidth: 1, borderRightWidth: 0, borderLeftWidth: 0 }}>
                <TextField
                    setValue={setNumeroFabricacao}
                    textField={"Nº de Fabricação"}
                    backColor={"white"}
                    placeholder={"000.000.000"}
                    type={"fabricNumber"}/>
                <RadioField
                    checked={demarcacaoPisoChecked}
                    setChecked={setDemarcacaoPisoChecked}
                    value={["sim", "nao"]}
                    textField={"Área de Demarcação do Piso"}
                    textRadio={["SIM", "NÃO"]}
                    backColor={"#D9D9D9"}/>
                <RadioField
                    checked={desobstrucaoChecked}
                    setChecked={setDesobstrucaoChecked}
                    value={["sim", "nao"]}
                    textField={"Desobstrução"}
                    textRadio={["SIM", "NÃO"]}
                    backColor={"white"}/>
                <RadioField
                    checked={integridadeEstruturaChecked}
                    setChecked={setIntegridadeEstruturaChecked}
                    value={["sim", "nao"]}
                    textField={"Integridade Estrutura \n(Mangueira, lacre, \ninstrução de uso, etc.)"}
                    textRadio={["SIM", "NÃO"]}
                    backColor={"#D9D9D9"}/>
                <RadioField
                    checked={fixacaoSuporteChecked}
                    setChecked={setFixacaoSuporteChecked}
                    value={["sim", "nao"]}
                    textField={"Fixação/Suporte"}
                    textRadio={["SIM", "NÃO"]}
                    backColor={"white"}/>
                <RadioField
                    checked={pressaoManometroChecked}
                    setChecked={setPressaoManometroChecked}
                    value={["sim", "nao"]}
                    textField={"Pressão do Manômetro"}
                    textRadio={["SIM", "NÃO"]}
                    backColor={"#D9D9D9"}/>
                <RadioField
                    checked={validadeChecked}
                    setChecked={setValidadeChecked}
                    value={["sim", "nao"]}
                    textField={"Validade"}
                    textRadio={["SIM", "NÃO"]}
                    backColor={"white"}/>
                <RadioField
                    checked={loteTipo}
                    setChecked={setLoteTipo}
                    value={["lote1", "lote2"]}
                    textField={"Lote"}
                    textRadio={["1º Lote", "2º Lote"]}
                    backColor={"#D9D9D9"}/>
                <TextField
                    setValue={setDataProximaRecarga}
                    textField={"Data da Próxima Recarga"}
                    backColor={"white"}
                    placeholder={"00/00/0000"}
                    type={"date"}/>
                <TextField
                    setValue={setDataTesteHidrostatico}
                    textField={"Data de Teste Hidrostático"}
                    backColor={"#D9D9D9"}
                    placeholder={"00/00/0000"}
                    type={"date"}/>
                <RadioField
                    checked={extintorTipo}
                    setChecked={setExtintorTipo}
                    value={["co2", "agua", "psq"]}
                    textField={"Tipo de Extintor"}
                    textRadio={["CO²", "Água", "PQS"]}
                    backColor={"white"}/>
            </View>
            <ThemedButtonFixed
                id={"registrar"}
                title={"Registrar"}
                height={60}
                bgColor={"#109370"}
                color={"white"}
                radius={10}
                fontSize={28}
                onPress={() => {}}
                top={"1%"}
                left={"17%"}
                right={0}
                bottom={0}/>
        </ParallaxScrollView>
    );
}