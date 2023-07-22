from tethys_sdk.base import TethysAppBase
from tethys_sdk.app_settings import CustomSetting

class NationalWaterLevelForecastPeru(TethysAppBase):
    """
    Tethys app class for National Water Level Forecast Peru.
    """

    name = 'National Water Level Forecast Peru'
    description = ''
    package = 'national_water_level_forecast_peru'
    index = 'home'
    icon = f'{package}/images/icon.gif'
    root_url = 'national-water-level-forecast-peru'
    color = '#20295C' #286090
    tags = ''
    enable_feedback = False
    feedback_emails = []

    def custom_settings(self):
        return (
            CustomSetting(
                name='SERVER',
                type=CustomSetting.TYPE_STRING,
                description='Server DNS or IP:PORT',
                required=True,
                default='localhost:8080',
            ),
            CustomSetting(
                name='DB_USER',
                type=CustomSetting.TYPE_STRING,
                description='Database user',
                required=True,
                default='postgres',
            ),
            CustomSetting(
                name='DB_PASS',
                type=CustomSetting.TYPE_STRING,
                description='Database password',
                required=True,
                default='pass',
            ),
            CustomSetting(
                name='DB_NAME',
                type=CustomSetting.TYPE_STRING,
                description='Database name',
                required=True,
                default='postgres',
            ),
        )