---
id: adding-processes
title: Adding a Process to the ERP Application
---

This guide will demonstrate how to add a process created using [assembler](http://203.135.63.70/assemble_empty_node/requirement_specs.jsp) to the erp application. We will use the `GRNByProduct` process as an example.

> For more information on how to create a process, [view this guide](/documentation-erp/creating-processes)

## Add Wizdler

Install this [chrome plugin](https://chrome.google.com/webstore/detail/wizdler/oebpmncolmhiapingjaagmapififiakb) to make creating soap messages easier. This plugin parses the wsdl files and does most of the work for you.

## Running the Process in Tomcat

Navigate to the bin folder of your tomcat server and start tomcat.

#### Windows

```bash
    startup.bat
```

#### Unix

```bash
    sudo ./startup.sh
```

Add the generated `GRNByProduct` folder inside the processes folder at this path in the tomcat server `webapps/ode/WEB-INF/processes/` and start tomcat.

## Creating the SOAP Message

Navigate to the path of the `GRNByProductArtifacts.wsdl` file. If you have been following along from the previous guide, it will look this http://localhost:8080/ode/processes/GRNByProduct, but the ports may be different.

Click on the wizdler plugin and select the process. It will generate this request message for you.

> If you see a list of process ports, select the one that says something like [processName]SOAP11port_http.

In our example, we selected GRNByProductSOAP11port_http. If you don't see it, don't worry and just select the only one that shows.

You should see a request looking like this.

![](/documentation-erp/img/process-request.png)

Copy this request and change it to this format.

```javascript
const receiveInventoryXml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:web="http://grnbyproduct">
    <soapenv:Body>
        <web:GRNByProductRequest xmlns="http://grnbyproduct">
            <web:correlationId>${instanceId}</web:correlationId>
            <web:productId>${productId}</web:productId>
            <web:inventoryItemType>${inventoryItemType}</web:inventoryItemType>
            <web:supplier>${supplier}</web:supplier>
            <web:facility>${facility}</web:facility>
            <web:facilityLocation>${facilityLocation}</web:facilityLocation>
            <web:quantityAccepted>${quantityAccepted}</web:quantityAccepted>
            <web:unitPrice>${unitPrice}</web:unitPrice>
            <web:receivedBy>${receivedBy}</web:receivedBy>
            <web:quantityRejected>${quantityRejected}</web:quantityRejected>
            <web:rejectionReason>${rejectionReason}</web:rejectionReason>
        </web:GRNByProductRequest>
    </soapenv:Body>
</soapenv:Envelope>`;
```

Post this data asynchronously to the server using whatever library or method you prefer. The erp application uses the axios library to post it like this. Once you get the response, you can parse it and handle it however you like.

In the erp application it is done like this.

```javascript
const response = await receiveInventoryByProductId(
  url,
  receiveInventoryXml,
  headers,
  message,
  handleSetState
);
```

| Name                        | Explanation                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| receiveInventoryByProductId | Returns a promise after posting through axios,parses the response and call handleSetState to save the data. |
| URL                         | The path of the wsdl file                                                                                   |
| receiveInventoryXml         | The SOAP request message                                                                                    |
| headers                     | The http headers passed to the server.                                                                      |
| message                     | The toast notification to be called once the process completes.                                             |
| handleSetState              | Callback function that saves data from the response to the state.                                           |

> Make sure to add the options for SOAP services and BPEL processes.

```javascript
"Content-Type": "xml", SOAPAction: ""
```
