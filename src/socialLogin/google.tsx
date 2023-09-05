import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { Button, Text, View } from "react-native";

function GoogleLogin() {
  WebBrowser.maybeCompleteAuthSession();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "199229219883-f0gkqakb3gke9rmthdk3m13eimpobemu.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response.params;
    }
  }, [response]);

  return (
    <View>
      <Button
        disabled={!request}
        title="login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}

export default GoogleLogin;
