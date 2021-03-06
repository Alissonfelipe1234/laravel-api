define({ "api": [
  {
    "type": "get",
    "url": "/nfe/:acess_key",
    "title": "Request Nfe information",
    "name": "GetNfe",
    "group": "Nfe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "acess_key",
            "description": "<p>Nfe unique.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "xml",
            "description": "<p>the Nfe xml.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/2.0 200 OK\n    {\n      \"xml\": \"<?xml version='1.0'?>\n<nfeProc\n\txmlns='http://www.portalfiscal.inf.br/nfe' versao='3.10'>\n\t<NFe\n\t\txmlns='http://www.portalfiscal.inf.br/nfe'>\n\t\t<infNFe\n\t\t\txmlns='http://www.portalfiscal.inf.br/nfe' Id='NFeXXXXXXXXXXXXXXX' versao='3.10'>\n\t\t\t<ide>\n\t\t\t\t<cUF> xxxxxxxxxx </cUF>\n\t\t\t\t<cNF> xxxxxxxxxx </cNF>\n\t\t\t\t<natOp> xxxxxxxxxx </natOp>\n\t\t\t\t<indPag> xxxxxxxxxx </indPag>\n\t\t\t\t<mod> xxxxxxxxxx </mod>\n\t\t\t\t<serie> xxxxxxxxxx </serie>\n\t\t\t\t<nNF> xxxxxxxxxx </nNF>\n\t\t\t\t<dhEmi> xxxxxxxxxx </dhEmi>\n\t\t\t\t<tpNF> xxxxxxxxxx </tpNF>\n\t\t\t\t<idDest> xxxxxxxxxx </idDest>\n\t\t\t\t<cMunFG> xxxxxxxxxx </cMunFG>\n\t\t\t\t<tpImp> xxxxxxxxxx </tpImp>\n\t\t\t\t<tpEmis> xxxxxxxxxx </tpEmis>\n\t\t\t\t<cDV> xxxxxxxxxx </cDV>\n\t\t\t\t<tpAmb> xxxxxxxxxx </tpAmb>\n\t\t\t\t<finNFe> xxxxxxxxxx </finNFe>\n\t\t\t\t<indFinal> xxxxxxxxxx </indFinal>\n\t\t\t\t<indPres> xxxxxxxxxx </indPres>\n\t\t\t\t<procEmi> xxxxxxxxxx </procEmi>\n\t\t\t\t<verProc> xxxxxxxxxx </verProc>\n\t\t\t</ide>\n\t\t\t<emit>\n\t\t\t\t<CNPJ> xxxxxxxxxx </CNPJ>\n\t\t\t\t<xNome> xxxxxxxxxx </xNome>\n\t\t\t\t<xFant> xxxxxxxxxx </xFant>\n\t\t\t\t<enderEmit>\n\t\t\t\t\t<xLgr> xxxxxxxxxx </xLgr>\n\t\t\t\t\t<nro> xxxxxxxxxx </nro>\n\t\t\t\t\t<xBairro> xxxxxxxxxx </xBairro>\n\t\t\t\t\t<cMun> xxxxxxxxxx </cMun>\n\t\t\t\t\t<xMun> xxxxxxxxxx </xMun>\n\t\t\t\t\t<UF> xxxxxxxxxx </UF>\n\t\t\t\t\t<CEP> xxxxxxxxxx </CEP>\n\t\t\t\t\t<cPais> xxxxxxxxxx </cPais>\n\t\t\t\t\t<xPais> xxxxxxxxxx </xPais>\n\t\t\t\t\t<fone> xxxxxxxxxx </fone>\n\t\t\t\t</enderEmit>\n\t\t\t\t<IE> xxxxxxxxxx </IE>\n\t\t\t\t<CRT> xxxxxxxxxx </CRT>\n\t\t\t</emit>\n\t\t\t<dest>\n\t\t\t\t<CNPJ> xxxxxxxxxx </CNPJ>\n\t\t\t\t<xNome> xxxxxxxxxx </xNome>\n\t\t\t\t<enderDest>\n\t\t\t\t\t<xLgr> xxxxxxxxxx </xLgr>\n\t\t\t\t\t<nro> xxxxxxxxxx </nro>\n\t\t\t\t\t<xBairro> xxxxxxxxxx </xBairro>\n\t\t\t\t\t<cMun> xxxxxxxxxx </cMun>\n\t\t\t\t\t<xMun> xxxxxxxxxx </xMun>\n\t\t\t\t\t<UF> xxxxxxxxxx </UF>\n\t\t\t\t\t<CEP> xxxxxxxxxx </CEP>\n\t\t\t\t\t<cPais> xxxxxxxxxx </cPais>\n\t\t\t\t\t<xPais> xxxxxxxxxx </xPais>\n\t\t\t\t</enderDest>\n\t\t\t\t<indIEDest> xxxxxxxxxx </indIEDest>\n\t\t\t\t<IE> xxxxxxxxxx </IE>\n\t\t\t</dest>\n\t\t\t<det nItem='1'>\n\t\t\t\t<prod>\n\t\t\t\t\t<cProd> xxxxxxxxxx </cProd>\n\t\t\t\t\t<cEAN/>\n\t\t\t\t\t<xProd> xxxxxxxxxx </xProd>\n\t\t\t\t\t<NCM> xxxxxxxxxx </NCM>\n\t\t\t\t\t<CFOP> xxxxxxxxxx </CFOP>\n\t\t\t\t\t<uCom> xxxxxxxxxx </uCom>\n\t\t\t\t\t<qCom> xxxxxxxxxx </qCom>\n\t\t\t\t\t<vUnCom> xxxxxxxxxx </vUnCom>\n\t\t\t\t\t<vProd> xxxxxxxxxx </vProd>\n\t\t\t\t\t<cEANTrib/>\n\t\t\t\t\t<uTrib> xxxxxxxxxx </uTrib>\n\t\t\t\t\t<qTrib> xxxxxxxxxx </qTrib>\n\t\t\t\t\t<vUnTrib> xxxxxxxxxx </vUnTrib>\n\t\t\t\t\t<indTot> xxxxxxxxxx </indTot>\n\t\t\t\t</prod>\n\t\t\t\t<imposto>\n\t\t\t\t\t<ICMS>\n\t\t\t\t\t\t<ICMS60>\n\t\t\t\t\t\t\t<orig> xxxxxxxxxx </orig>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t</ICMS60>\n\t\t\t\t\t</ICMS>\n\t\t\t\t\t<PIS>\n\t\t\t\t\t\t<PISNT>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t</PISNT>\n\t\t\t\t\t</PIS>\n\t\t\t\t\t<COFINS>\n\t\t\t\t\t\t<COFINSNT>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t</COFINSNT>\n\t\t\t\t\t</COFINS>\n\t\t\t\t</imposto>\n\t\t\t</det>\n\t\t\t<det nItem='2'>\n\t\t\t\t<prod>\n\t\t\t\t\t<cProd> xxxxxxxxxx </cProd>\n\t\t\t\t\t<cEAN> xxxxxxxxxx </cEAN>\n\t\t\t\t\t<xProd> xxxxxxxxxx </xProd>\n\t\t\t\t\t<NCM> xxxxxxxxxx </NCM>\n\t\t\t\t\t<CFOP> xxxxxxxxxx </CFOP>\n\t\t\t\t\t<uCom> xxxxxxxxxx </uCom>\n\t\t\t\t\t<qCom> xxxxxxxxxx </qCom>\n\t\t\t\t\t<vUnCom> xxxxxxxxxx </vUnCom>\n\t\t\t\t\t<vProd> xxxxxxxxxx </vProd>\n\t\t\t\t\t<cEANTrib> xxxxxxxxxx </cEANTrib>\n\t\t\t\t\t<uTrib> xxxxxxxxxx </uTrib>\n\t\t\t\t\t<qTrib> xxxxxxxxxx </qTrib>\n\t\t\t\t\t<vUnTrib> xxxxxxxxxx </vUnTrib>\n\t\t\t\t\t<indTot> xxxxxxxxxx </indTot>\n\t\t\t\t</prod>\n\t\t\t\t<imposto>\n\t\t\t\t\t<ICMS>\n\t\t\t\t\t\t<ICMS60>\n\t\t\t\t\t\t\t<orig> xxxxxxxxxx </orig>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t</ICMS60>\n\t\t\t\t\t</ICMS>\n\t\t\t\t\t<PIS>\n\t\t\t\t\t\t<PISNT>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t</PISNT>\n\t\t\t\t\t</PIS>\n\t\t\t\t\t<COFINS>\n\t\t\t\t\t\t<COFINSNT>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t</COFINSNT>\n\t\t\t\t\t</COFINS>\n\t\t\t\t</imposto>\n\t\t\t</det>\n\t\t\t<det nItem='4'>\n\t\t\t\t<prod>\n\t\t\t\t\t<cProd> xxxxxxxxxx </cProd>\n\t\t\t\t\t<cEAN> xxxxxxxxxx </cEAN>\n\t\t\t\t\t<xProd> xxxxxxxxxx </xProd>\n\t\t\t\t\t<NCM> xxxxxxxxxx </NCM>\n\t\t\t\t\t<CFOP> xxxxxxxxxx </CFOP>\n\t\t\t\t\t<uCom> xxxxxxxxxx </uCom>\n\t\t\t\t\t<qCom> xxxxxxxxxx </qCom>\n\t\t\t\t\t<vUnCom> xxxxxxxxxx </vUnCom>\n\t\t\t\t\t<vProd> xxxxxxxxxx </vProd>\n\t\t\t\t\t<cEANTrib> xxxxxxxxxx </cEANTrib>\n\t\t\t\t\t<uTrib> xxxxxxxxxx </uTrib>\n\t\t\t\t\t<qTrib> xxxxxxxxxx </qTrib>\n\t\t\t\t\t<vUnTrib> xxxxxxxxxx </vUnTrib>\n\t\t\t\t\t<indTot> xxxxxxxxxx </indTot>\n\t\t\t\t</prod>\n\t\t\t\t<imposto>\n\t\t\t\t\t<ICMS>\n\t\t\t\t\t\t<ICMS60>\n\t\t\t\t\t\t\t<orig> xxxxxxxxxx </orig>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t</ICMS60>\n\t\t\t\t\t</ICMS>\n\t\t\t\t\t<PIS>\n\t\t\t\t\t\t<PISAliq>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t\t<vBC> xxxxxxxxxx </vBC>\n\t\t\t\t\t\t\t<pPIS> xxxxxxxxxx </pPIS>\n\t\t\t\t\t\t\t<vPIS> xxxxxxxxxx </vPIS>\n\t\t\t\t\t\t</PISAliq>\n\t\t\t\t\t</PIS>\n\t\t\t\t\t<COFINS>\n\t\t\t\t\t\t<COFINSAliq>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t\t<vBC> xxxxxxxxxx </vBC>\n\t\t\t\t\t\t\t<pCOFINS> xxxxxxxxxx </pCOFINS>\n\t\t\t\t\t\t\t<vCOFINS> xxxxxxxxxx </vCOFINS>\n\t\t\t\t\t\t</COFINSAliq>\n\t\t\t\t\t</COFINS>\n\t\t\t\t</imposto>\n\t\t\t</det>\n\t\t\t<det nItem='5'>\n\t\t\t\t<prod>\n\t\t\t\t\t<cProd> xxxxxxxxxx </cProd>\n\t\t\t\t\t<cEAN> xxxxxxxxxx </cEAN>\n\t\t\t\t\t<xProd> xxxxxxxxxx </xProd>\n\t\t\t\t\t<NCM> xxxxxxxxxx </NCM>\n\t\t\t\t\t<CFOP> xxxxxxxxxx </CFOP>\n\t\t\t\t\t<uCom> xxxxxxxxxx </uCom>\n\t\t\t\t\t<qCom> xxxxxxxxxx </qCom>\n\t\t\t\t\t<vUnCom> xxxxxxxxxx </vUnCom>\n\t\t\t\t\t<vProd> xxxxxxxxxx </vProd>\n\t\t\t\t\t<cEANTrib> xxxxxxxxxx </cEANTrib>\n\t\t\t\t\t<uTrib> xxxxxxxxxx </uTrib>\n\t\t\t\t\t<qTrib> xxxxxxxxxx </qTrib>\n\t\t\t\t\t<vUnTrib> xxxxxxxxxx </vUnTrib>\n\t\t\t\t\t<indTot> xxxxxxxxxx </indTot>\n\t\t\t\t</prod>\n\t\t\t\t<imposto>\n\t\t\t\t\t<ICMS>\n\t\t\t\t\t\t<ICMS60>\n\t\t\t\t\t\t\t<orig> xxxxxxxxxx </orig>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t</ICMS60>\n\t\t\t\t\t</ICMS>\n\t\t\t\t\t<PIS>\n\t\t\t\t\t\t<PISAliq>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t\t<vBC> xxxxxxxxxx </vBC>\n\t\t\t\t\t\t\t<pPIS> xxxxxxxxxx </pPIS>\n\t\t\t\t\t\t\t<vPIS> xxxxxxxxxx </vPIS>\n\t\t\t\t\t\t</PISAliq>\n\t\t\t\t\t</PIS>\n\t\t\t\t\t<COFINS>\n\t\t\t\t\t\t<COFINSAliq>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t\t<vBC> xxxxxxxxxx </vBC>\n\t\t\t\t\t\t\t<pCOFINS> xxxxxxxxxx </pCOFINS>\n\t\t\t\t\t\t\t<vCOFINS> xxxxxxxxxx </vCOFINS>\n\t\t\t\t\t\t</COFINSAliq>\n\t\t\t\t\t</COFINS>\n\t\t\t\t</imposto>\n\t\t\t</det>\n\t\t\t<det nItem='3'>\n\t\t\t\t<prod>\n\t\t\t\t\t<cProd> xxxxxxxxxx </cProd>\n\t\t\t\t\t<cEAN/>\n\t\t\t\t\t<xProd> xxxxxxxxxx </xProd>\n\t\t\t\t\t<NCM> xxxxxxxxxx </NCM>\n\t\t\t\t\t<CFOP> xxxxxxxxxx </CFOP>\n\t\t\t\t\t<uCom> xxxxxxxxxx </uCom>\n\t\t\t\t\t<qCom> xxxxxxxxxx </qCom>\n\t\t\t\t\t<vUnCom> xxxxxxxxxx </vUnCom>\n\t\t\t\t\t<vProd> xxxxxxxxxx </vProd>\n\t\t\t\t\t<cEANTrib/>\n\t\t\t\t\t<uTrib> xxxxxxxxxx </uTrib>\n\t\t\t\t\t<qTrib> xxxxxxxxxx </qTrib>\n\t\t\t\t\t<vUnTrib> xxxxxxxxxx </vUnTrib>\n\t\t\t\t\t<indTot> xxxxxxxxxx </indTot>\n\t\t\t\t</prod>\n\t\t\t\t<imposto>\n\t\t\t\t\t<ICMS>\n\t\t\t\t\t\t<ICMS60>\n\t\t\t\t\t\t\t<orig> xxxxxxxxxx </orig>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t</ICMS60>\n\t\t\t\t\t</ICMS>\n\t\t\t\t\t<PIS>\n\t\t\t\t\t\t<PISAliq>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t\t<vBC> xxxxxxxxxx </vBC>\n\t\t\t\t\t\t\t<pPIS> xxxxxxxxxx </pPIS>\n\t\t\t\t\t\t\t<vPIS> xxxxxxxxxx </vPIS>\n\t\t\t\t\t\t</PISAliq>\n\t\t\t\t\t</PIS>\n\t\t\t\t\t<COFINS>\n\t\t\t\t\t\t<COFINSAliq>\n\t\t\t\t\t\t\t<CST> xxxxxxxxxx </CST>\n\t\t\t\t\t\t\t<vBC> xxxxxxxxxx </vBC>\n\t\t\t\t\t\t\t<pCOFINS> xxxxxxxxxx </pCOFINS>\n\t\t\t\t\t\t\t<vCOFINS> xxxxxxxxxx </vCOFINS>\n\t\t\t\t\t\t</COFINSAliq>\n\t\t\t\t\t</COFINS>\n\t\t\t\t</imposto>\n\t\t\t</det>\n\t\t\t<total>\n\t\t\t\t<ICMSTot>\n\t\t\t\t\t<vBC> xxxxxxxxxx </vBC>\n\t\t\t\t\t<vICMS> xxxxxxxxxx </vICMS>\n\t\t\t\t\t<vICMSDeson> xxxxxxxxxx </vICMSDeson>\n\t\t\t\t\t<vBCST> xxxxxxxxxx </vBCST>\n\t\t\t\t\t<vST> xxxxxxxxxx </vST>\n\t\t\t\t\t<vProd> xxxxxxxxxx </vProd>\n\t\t\t\t\t<vFrete> xxxxxxxxxx </vFrete>\n\t\t\t\t\t<vSeg> xxxxxxxxxx </vSeg>\n\t\t\t\t\t<vDesc> xxxxxxxxxx </vDesc>\n\t\t\t\t\t<vII> xxxxxxxxxx </vII>\n\t\t\t\t\t<vIPI> xxxxxxxxxx </vIPI>\n\t\t\t\t\t<vPIS> xxxxxxxxxx </vPIS>\n\t\t\t\t\t<vCOFINS> xxxxxxxxxx </vCOFINS>\n\t\t\t\t\t<vOutro> xxxxxxxxxx </vOutro>\n\t\t\t\t\t<vNF> xxxxxxxxxx </vNF>\n\t\t\t\t</ICMSTot>\n\t\t\t</total>\n\t\t\t<transp>\n\t\t\t\t<modFrete> xxxxxxxxxx </modFrete>\n\t\t\t\t<transporta>\n\t\t\t\t\t<CNPJ> xxxxxxxxxx </CNPJ>\n\t\t\t\t\t<xNome> xxxxxxxxxx </xNome>\n\t\t\t\t\t<IE> xxxxxxxxxx </IE>\n\t\t\t\t\t<xEnder> xxxxxxxxxx </xEnder>\n\t\t\t\t\t<xMun> xxxxxxxxxx </xMun>\n\t\t\t\t\t<UF> xxxxxxxxxx </UF>\n\t\t\t\t</transporta>\n\t\t\t\t<vol>\n\t\t\t\t\t<qVol> xxxxxxxxxx </qVol>\n\t\t\t\t\t<esp> xxxxxxxxxx </esp>\n\t\t\t\t\t<pesoL> xxxxxxxxxx </pesoL>\n\t\t\t\t\t<pesoB> xxxxxxxxxx </pesoB>\n\t\t\t\t</vol>\n\t\t\t</transp>\n\t\t</infNFe>\n\t\t<Signature\n\t\t\txmlns='http://www.w3.org/2000/09/xmldsig#'>\n\t\t\t<SignedInfo>\n\t\t\t\t<CanonicalizationMethod Algorithm='http://www.w3.org/TR/2001/REC-xml-c14n-20010315'/>\n\t\t\t\t<SignatureMethod Algorithm='http://www.w3.org/2000/09/xmldsig#rsa-sha1'/>\n\t\t\t\t<Reference URI='#NFeXXXXXXXXXXXXXXX'>\n\t\t\t\t\t<Transforms>\n\t\t\t\t\t\t<Transform Algorithm='http://www.w3.org/2000/09/xmldsig#enveloped-signature'/>\n\t\t\t\t\t\t<Transform Algorithm='http://www.w3.org/TR/2001/REC-xml-c14n-20010315'/>\n\t\t\t\t\t</Transforms>\n\t\t\t\t\t<DigestMethod Algorithm='http://www.w3.org/2000/09/xmldsig#sha1'/>\n\t\t\t\t\t<DigestValue> xxxxxxxxxx </DigestValue>\n\t\t\t\t</Reference>\n\t\t\t</SignedInfo>\n\t\t\t<SignatureValue> xxxxxxxxxx </SignatureValue>\n\t\t\t<KeyInfo>\n\t\t\t\t<X509Data>\n\t\t\t\t\t<X509Certificate> xxxxxxxxxx </X509Certificate>\n\t\t\t\t</X509Data>\n\t\t\t</KeyInfo>\n\t\t</Signature>\n\t</NFe>\n\t<protNFe versao='3.10'>\n\t\t<infProt Id='Id135140154348408'>\n\t\t\t<tpAmb> xxxxxxxxxx </tpAmb>\n\t\t\t<verAplic> xxxxxxxxxx </verAplic>\n\t\t\t<chNFe> xxxxxxxxxx </chNFe>\n\t\t\t<dhRecbto> xxxxxxxxxx </dhRecbto>\n\t\t\t<nProt> xxxxxxxxxx </nProt>\n\t\t\t<digVal> xxxxxxxxxx </digVal>\n\t\t\t<cStat> xxxxxxxxxx </cStat>\n\t\t\t<xMotivo> xxxxxxxxxx </xMotivo>\n\t\t</infProt>\n\t</protNFe>\n</nfeProc>\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "doc/doc.js",
    "groupTitle": "Nfe",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NfeNotFound",
            "description": "<p>The acess_key of the Nfe was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/2.0 404 Not Found\n{\n  \"error\": \"NfeNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
