import { useState } from "react";
import { SafeAreaView } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { Conteiner } from "./style";
import React from "react";

export default function SpinnerTask(){
    const [loading ,setLoading] = useState(false)


    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      };

      <SafeAreaView>
        <Conteiner>
            <Spinner

            visible={loading}
            textContent="Loanding"
            textStyle={{color:'#fff'}}
            />
        </Conteiner>
      </SafeAreaView>

}