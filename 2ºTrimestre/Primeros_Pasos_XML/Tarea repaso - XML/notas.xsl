<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
        <html>
            <head>
                <title>Notas de Alumnos</title>
                <style>
                    table { border-collapse: collapse; width: 50%; margin: 20px; }
                    th, td { border: 1px solid black; padding: 8px; text-align: center; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <h2>Notas de Alumnos</h2>
                <table>
                    <tr>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th>Nota 3</th>
                        <th>Media</th>
                    </tr>
                    <xsl:for-each select="notas/alumno">
                        <tr>
                            <td><xsl:value-of select="nota1"/></td>
                            <td><xsl:value-of select="nota2"/></td>
                            <td><xsl:value-of select="nota3"/></td>
                            <td><xsl:value-of select="media"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
  </xsl:template>
</xsl:stylesheet>
 