var configAuth = require('./../config/auth.js');
var date = new Date();

module.exports = {

    'WebAuthenticationDetail': {
        'UserCredential': {
            'Key': configAuth.key, //Your Key given by FedEx
            'Password': configAuth.password //Your Password given by FedEx
        }
    },
    'ClientDetail': {
        AccountNumber: configAuth.accountNumber, //Your Account Number given by FedEx
        MeterNumber: configAuth.meterNumber //Your Meter Number given by FedEx
    },
    'Version': {
        'ServiceId': 'crs',
        'Major': '20', 
        'Intermediate': '0',
        'Minor': '0'
    },
    'ReturnTransitAndCommit': true,
    'RequestedShipment': {
        'ShipTimestamp': new Date(date.getTime() + (24*60*60*1000)).toISOString(),
        'DropoffType': 'REGULAR_PICKUP',
        'ServiceType': 'STANDARD_OVERNIGHT',
        'PackagingType': 'YOUR_PACKAGING',
        'TotalWeight': {
            'Units': 'LB',
            'Value': "10"
        },
        'Shipper': {
            'Contact': {
                'CompanyName': 'Company Name',
                'PhoneNumber': '5555555555'
            },
            'Address': {
                'StreetLines': [
                'Address Line 1'
                ],
                'City': 'Collierville',
                'StateOrProvinceCode': 'TN',
                'PostalCode': '38017',
                'CountryCode': 'US'
            }
        },
        'Recipient': {
            'Contact': {
                'PersonName': 'Recipient Name',
                'PhoneNumber': '5555555555'
            },
            'Address': {
                'StreetLines': [
                'Address Line 1'
                ],
                'City': 'Charlotte',
                'StateOrProvinceCode': 'NC',
                'PostalCode': '28202',
                'CountryCode': 'US'
            }
        },
        'ShippingChargesPayment': {
            'PaymentType': 'SENDER',
            'Payor': {
                'ResponsibleParty': {
                    'AccountNumber': configAuth.accountNumber //Your Account Number given by FedEx
                }
            }
        },
        'RateRequestTypes': 'LIST',
        'PackageCount': '1',
        'RequestedPackageLineItems': {
            'GroupPackageCount': 1,
            'Weight': {
                'Units': 'LB',
                'Value': "10"
            },
            'Dimensions': {
                'Length': "4",
                'Width': "6",
                'Height': "10",
                'Units': "IN"
            }
        }
    }

};