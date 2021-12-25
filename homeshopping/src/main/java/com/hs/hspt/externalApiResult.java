package com.hs.hspt;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Vector;

import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service("externalApiService")
public class externalApiResult {
	
	private static final Logger logger = LoggerFactory.getLogger(externalApiResult.class);
	
	public JSONObject externalApiResult(String url) throws URISyntaxException, ClientProtocolException, IOException, ParseException {

		CloseableHttpClient httpClient = HttpClients.createDefault();
		URIBuilder builder = new URIBuilder(url);
		HttpGet httpGet = new HttpGet(builder.build());

		CloseableHttpResponse httpResponse = httpClient.execute(httpGet);
		
		String json = null;
		
		if(httpResponse != null) {
			json = EntityUtils.toString(httpResponse.getEntity(), "UTF-8");
		}
		
		JSONParser parser = new JSONParser();
		JSONObject jsonObject= null;
		
		if(json != null) {
			jsonObject = (JSONObject) parser.parse(json);
		}
		
		httpClient.close();
		
		return jsonObject;
	}
	

}
