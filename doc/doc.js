/**
 * @apiDefine NfeNotFoundError
 *
 * @apiError NfeNotFound The acess_key of the Nfe was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/2.0 404 Not Found
 *     {
 *       "error": "NfeNotFound"
 *     }
 */

/**
 * @api {get} /nfe/:acess_key Request Nfe information
 * @apiName GetNfe
 * @apiGroup Nfe
 *
 * @apiParam {Number} acess_key Nfe unique.
 *
 * @apiSuccess {String} xml the Nfe xml.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/2.0 200 OK
 *     {
 *       "xml": "<?xml version='1.0'?>
<nfeProc
	xmlns='http://www.portalfiscal.inf.br/nfe' versao='3.10'>
	<NFe
		xmlns='http://www.portalfiscal.inf.br/nfe'>
		<infNFe
			xmlns='http://www.portalfiscal.inf.br/nfe' Id='NFeXXXXXXXXXXXXXXX' versao='3.10'>
			<ide>
				<cUF> xxxxxxxxxx </cUF>
				<cNF> xxxxxxxxxx </cNF>
				<natOp> xxxxxxxxxx </natOp>
				<indPag> xxxxxxxxxx </indPag>
				<mod> xxxxxxxxxx </mod>
				<serie> xxxxxxxxxx </serie>
				<nNF> xxxxxxxxxx </nNF>
				<dhEmi> xxxxxxxxxx </dhEmi>
				<tpNF> xxxxxxxxxx </tpNF>
				<idDest> xxxxxxxxxx </idDest>
				<cMunFG> xxxxxxxxxx </cMunFG>
				<tpImp> xxxxxxxxxx </tpImp>
				<tpEmis> xxxxxxxxxx </tpEmis>
				<cDV> xxxxxxxxxx </cDV>
				<tpAmb> xxxxxxxxxx </tpAmb>
				<finNFe> xxxxxxxxxx </finNFe>
				<indFinal> xxxxxxxxxx </indFinal>
				<indPres> xxxxxxxxxx </indPres>
				<procEmi> xxxxxxxxxx </procEmi>
				<verProc> xxxxxxxxxx </verProc>
			</ide>
			<emit>
				<CNPJ> xxxxxxxxxx </CNPJ>
				<xNome> xxxxxxxxxx </xNome>
				<xFant> xxxxxxxxxx </xFant>
				<enderEmit>
					<xLgr> xxxxxxxxxx </xLgr>
					<nro> xxxxxxxxxx </nro>
					<xBairro> xxxxxxxxxx </xBairro>
					<cMun> xxxxxxxxxx </cMun>
					<xMun> xxxxxxxxxx </xMun>
					<UF> xxxxxxxxxx </UF>
					<CEP> xxxxxxxxxx </CEP>
					<cPais> xxxxxxxxxx </cPais>
					<xPais> xxxxxxxxxx </xPais>
					<fone> xxxxxxxxxx </fone>
				</enderEmit>
				<IE> xxxxxxxxxx </IE>
				<CRT> xxxxxxxxxx </CRT>
			</emit>
			<dest>
				<CNPJ> xxxxxxxxxx </CNPJ>
				<xNome> xxxxxxxxxx </xNome>
				<enderDest>
					<xLgr> xxxxxxxxxx </xLgr>
					<nro> xxxxxxxxxx </nro>
					<xBairro> xxxxxxxxxx </xBairro>
					<cMun> xxxxxxxxxx </cMun>
					<xMun> xxxxxxxxxx </xMun>
					<UF> xxxxxxxxxx </UF>
					<CEP> xxxxxxxxxx </CEP>
					<cPais> xxxxxxxxxx </cPais>
					<xPais> xxxxxxxxxx </xPais>
				</enderDest>
				<indIEDest> xxxxxxxxxx </indIEDest>
				<IE> xxxxxxxxxx </IE>
			</dest>
			<det nItem='1'>
				<prod>
					<cProd> xxxxxxxxxx </cProd>
					<cEAN/>
					<xProd> xxxxxxxxxx </xProd>
					<NCM> xxxxxxxxxx </NCM>
					<CFOP> xxxxxxxxxx </CFOP>
					<uCom> xxxxxxxxxx </uCom>
					<qCom> xxxxxxxxxx </qCom>
					<vUnCom> xxxxxxxxxx </vUnCom>
					<vProd> xxxxxxxxxx </vProd>
					<cEANTrib/>
					<uTrib> xxxxxxxxxx </uTrib>
					<qTrib> xxxxxxxxxx </qTrib>
					<vUnTrib> xxxxxxxxxx </vUnTrib>
					<indTot> xxxxxxxxxx </indTot>
				</prod>
				<imposto>
					<ICMS>
						<ICMS60>
							<orig> xxxxxxxxxx </orig>
							<CST> xxxxxxxxxx </CST>
						</ICMS60>
					</ICMS>
					<PIS>
						<PISNT>
							<CST> xxxxxxxxxx </CST>
						</PISNT>
					</PIS>
					<COFINS>
						<COFINSNT>
							<CST> xxxxxxxxxx </CST>
						</COFINSNT>
					</COFINS>
				</imposto>
			</det>
			<det nItem='2'>
				<prod>
					<cProd> xxxxxxxxxx </cProd>
					<cEAN> xxxxxxxxxx </cEAN>
					<xProd> xxxxxxxxxx </xProd>
					<NCM> xxxxxxxxxx </NCM>
					<CFOP> xxxxxxxxxx </CFOP>
					<uCom> xxxxxxxxxx </uCom>
					<qCom> xxxxxxxxxx </qCom>
					<vUnCom> xxxxxxxxxx </vUnCom>
					<vProd> xxxxxxxxxx </vProd>
					<cEANTrib> xxxxxxxxxx </cEANTrib>
					<uTrib> xxxxxxxxxx </uTrib>
					<qTrib> xxxxxxxxxx </qTrib>
					<vUnTrib> xxxxxxxxxx </vUnTrib>
					<indTot> xxxxxxxxxx </indTot>
				</prod>
				<imposto>
					<ICMS>
						<ICMS60>
							<orig> xxxxxxxxxx </orig>
							<CST> xxxxxxxxxx </CST>
						</ICMS60>
					</ICMS>
					<PIS>
						<PISNT>
							<CST> xxxxxxxxxx </CST>
						</PISNT>
					</PIS>
					<COFINS>
						<COFINSNT>
							<CST> xxxxxxxxxx </CST>
						</COFINSNT>
					</COFINS>
				</imposto>
			</det>
			<det nItem='4'>
				<prod>
					<cProd> xxxxxxxxxx </cProd>
					<cEAN> xxxxxxxxxx </cEAN>
					<xProd> xxxxxxxxxx </xProd>
					<NCM> xxxxxxxxxx </NCM>
					<CFOP> xxxxxxxxxx </CFOP>
					<uCom> xxxxxxxxxx </uCom>
					<qCom> xxxxxxxxxx </qCom>
					<vUnCom> xxxxxxxxxx </vUnCom>
					<vProd> xxxxxxxxxx </vProd>
					<cEANTrib> xxxxxxxxxx </cEANTrib>
					<uTrib> xxxxxxxxxx </uTrib>
					<qTrib> xxxxxxxxxx </qTrib>
					<vUnTrib> xxxxxxxxxx </vUnTrib>
					<indTot> xxxxxxxxxx </indTot>
				</prod>
				<imposto>
					<ICMS>
						<ICMS60>
							<orig> xxxxxxxxxx </orig>
							<CST> xxxxxxxxxx </CST>
						</ICMS60>
					</ICMS>
					<PIS>
						<PISAliq>
							<CST> xxxxxxxxxx </CST>
							<vBC> xxxxxxxxxx </vBC>
							<pPIS> xxxxxxxxxx </pPIS>
							<vPIS> xxxxxxxxxx </vPIS>
						</PISAliq>
					</PIS>
					<COFINS>
						<COFINSAliq>
							<CST> xxxxxxxxxx </CST>
							<vBC> xxxxxxxxxx </vBC>
							<pCOFINS> xxxxxxxxxx </pCOFINS>
							<vCOFINS> xxxxxxxxxx </vCOFINS>
						</COFINSAliq>
					</COFINS>
				</imposto>
			</det>
			<det nItem='5'>
				<prod>
					<cProd> xxxxxxxxxx </cProd>
					<cEAN> xxxxxxxxxx </cEAN>
					<xProd> xxxxxxxxxx </xProd>
					<NCM> xxxxxxxxxx </NCM>
					<CFOP> xxxxxxxxxx </CFOP>
					<uCom> xxxxxxxxxx </uCom>
					<qCom> xxxxxxxxxx </qCom>
					<vUnCom> xxxxxxxxxx </vUnCom>
					<vProd> xxxxxxxxxx </vProd>
					<cEANTrib> xxxxxxxxxx </cEANTrib>
					<uTrib> xxxxxxxxxx </uTrib>
					<qTrib> xxxxxxxxxx </qTrib>
					<vUnTrib> xxxxxxxxxx </vUnTrib>
					<indTot> xxxxxxxxxx </indTot>
				</prod>
				<imposto>
					<ICMS>
						<ICMS60>
							<orig> xxxxxxxxxx </orig>
							<CST> xxxxxxxxxx </CST>
						</ICMS60>
					</ICMS>
					<PIS>
						<PISAliq>
							<CST> xxxxxxxxxx </CST>
							<vBC> xxxxxxxxxx </vBC>
							<pPIS> xxxxxxxxxx </pPIS>
							<vPIS> xxxxxxxxxx </vPIS>
						</PISAliq>
					</PIS>
					<COFINS>
						<COFINSAliq>
							<CST> xxxxxxxxxx </CST>
							<vBC> xxxxxxxxxx </vBC>
							<pCOFINS> xxxxxxxxxx </pCOFINS>
							<vCOFINS> xxxxxxxxxx </vCOFINS>
						</COFINSAliq>
					</COFINS>
				</imposto>
			</det>
			<det nItem='3'>
				<prod>
					<cProd> xxxxxxxxxx </cProd>
					<cEAN/>
					<xProd> xxxxxxxxxx </xProd>
					<NCM> xxxxxxxxxx </NCM>
					<CFOP> xxxxxxxxxx </CFOP>
					<uCom> xxxxxxxxxx </uCom>
					<qCom> xxxxxxxxxx </qCom>
					<vUnCom> xxxxxxxxxx </vUnCom>
					<vProd> xxxxxxxxxx </vProd>
					<cEANTrib/>
					<uTrib> xxxxxxxxxx </uTrib>
					<qTrib> xxxxxxxxxx </qTrib>
					<vUnTrib> xxxxxxxxxx </vUnTrib>
					<indTot> xxxxxxxxxx </indTot>
				</prod>
				<imposto>
					<ICMS>
						<ICMS60>
							<orig> xxxxxxxxxx </orig>
							<CST> xxxxxxxxxx </CST>
						</ICMS60>
					</ICMS>
					<PIS>
						<PISAliq>
							<CST> xxxxxxxxxx </CST>
							<vBC> xxxxxxxxxx </vBC>
							<pPIS> xxxxxxxxxx </pPIS>
							<vPIS> xxxxxxxxxx </vPIS>
						</PISAliq>
					</PIS>
					<COFINS>
						<COFINSAliq>
							<CST> xxxxxxxxxx </CST>
							<vBC> xxxxxxxxxx </vBC>
							<pCOFINS> xxxxxxxxxx </pCOFINS>
							<vCOFINS> xxxxxxxxxx </vCOFINS>
						</COFINSAliq>
					</COFINS>
				</imposto>
			</det>
			<total>
				<ICMSTot>
					<vBC> xxxxxxxxxx </vBC>
					<vICMS> xxxxxxxxxx </vICMS>
					<vICMSDeson> xxxxxxxxxx </vICMSDeson>
					<vBCST> xxxxxxxxxx </vBCST>
					<vST> xxxxxxxxxx </vST>
					<vProd> xxxxxxxxxx </vProd>
					<vFrete> xxxxxxxxxx </vFrete>
					<vSeg> xxxxxxxxxx </vSeg>
					<vDesc> xxxxxxxxxx </vDesc>
					<vII> xxxxxxxxxx </vII>
					<vIPI> xxxxxxxxxx </vIPI>
					<vPIS> xxxxxxxxxx </vPIS>
					<vCOFINS> xxxxxxxxxx </vCOFINS>
					<vOutro> xxxxxxxxxx </vOutro>
					<vNF> xxxxxxxxxx </vNF>
				</ICMSTot>
			</total>
			<transp>
				<modFrete> xxxxxxxxxx </modFrete>
				<transporta>
					<CNPJ> xxxxxxxxxx </CNPJ>
					<xNome> xxxxxxxxxx </xNome>
					<IE> xxxxxxxxxx </IE>
					<xEnder> xxxxxxxxxx </xEnder>
					<xMun> xxxxxxxxxx </xMun>
					<UF> xxxxxxxxxx </UF>
				</transporta>
				<vol>
					<qVol> xxxxxxxxxx </qVol>
					<esp> xxxxxxxxxx </esp>
					<pesoL> xxxxxxxxxx </pesoL>
					<pesoB> xxxxxxxxxx </pesoB>
				</vol>
			</transp>
		</infNFe>
		<Signature
			xmlns='http://www.w3.org/2000/09/xmldsig#'>
			<SignedInfo>
				<CanonicalizationMethod Algorithm='http://www.w3.org/TR/2001/REC-xml-c14n-20010315'/>
				<SignatureMethod Algorithm='http://www.w3.org/2000/09/xmldsig#rsa-sha1'/>
				<Reference URI='#NFeXXXXXXXXXXXXXXX'>
					<Transforms>
						<Transform Algorithm='http://www.w3.org/2000/09/xmldsig#enveloped-signature'/>
						<Transform Algorithm='http://www.w3.org/TR/2001/REC-xml-c14n-20010315'/>
					</Transforms>
					<DigestMethod Algorithm='http://www.w3.org/2000/09/xmldsig#sha1'/>
					<DigestValue> xxxxxxxxxx </DigestValue>
				</Reference>
			</SignedInfo>
			<SignatureValue> xxxxxxxxxx </SignatureValue>
			<KeyInfo>
				<X509Data>
					<X509Certificate> xxxxxxxxxx </X509Certificate>
				</X509Data>
			</KeyInfo>
		</Signature>
	</NFe>
	<protNFe versao='3.10'>
		<infProt Id='Id135140154348408'>
			<tpAmb> xxxxxxxxxx </tpAmb>
			<verAplic> xxxxxxxxxx </verAplic>
			<chNFe> xxxxxxxxxx </chNFe>
			<dhRecbto> xxxxxxxxxx </dhRecbto>
			<nProt> xxxxxxxxxx </nProt>
			<digVal> xxxxxxxxxx </digVal>
			<cStat> xxxxxxxxxx </cStat>
			<xMotivo> xxxxxxxxxx </xMotivo>
		</infProt>
	</protNFe>
</nfeProc>"
 *     }
 *
 * @apiUse NfeNotFoundError
 */